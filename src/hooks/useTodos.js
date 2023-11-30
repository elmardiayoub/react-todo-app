import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchTodos } from "../api/todoApi";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const { data: todosData, error, isLoading } = useQuery("todos", fetchTodos);

  useEffect(() => {
    if (todosData) {
      setTodos(todosData);
    }
  }, [todosData]);

  const addTodo = (newTodo) => {
    const newTodoItem = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    isLoading,
    error,
  };
};

export default useTodos;
