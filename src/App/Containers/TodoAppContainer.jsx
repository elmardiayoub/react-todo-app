// TodoAppContainer.jsx
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../api/todoApi";
import TodoList from "../Components/TodoList";
import AddTodoForm from "../Components/AddTodoForm";
import FilterTodo from "../Components/FilterTodo";

const TodoAppContainer = () => {
  // State for managing todos
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // React Query hook for fetching todos from the API
  const { data: todosData, error, isLoading } = useQuery(["todos"], fetchTodos);

  // useEffect to update state when the data is fetched
  useEffect(() => {
    if (todosData) {
      setTodos(todosData);
    }
  }, [todosData]);

  // useEffect to update filteredTodos when todos or filter change
  useEffect(() => {
    // Handle filter change logic here
    if (filter === "all") {
      setFilteredTodos(todos);
    } else if (filter === "active") {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    } else if (filter === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    }
  }, [todos, filter]);

  // Function to add a new todo
  const handleAddTodo = (newTodo) => {
    const newTodoItem = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
  };

  // Function to delete a todo
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Function to toggle the completion status of a todo
  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to handle filter change
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  // Render loading state while data is being fetched
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Render error state if there is an issue with data fetching
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="todo-app-container">
      <AddTodoForm onAdd={handleAddTodo} />
      <FilterTodo onFilterChange={handleFilterChange} />
      <TodoList
        todos={filteredTodos} // Render filteredTodos instead of todos
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
};

export default TodoAppContainer;
