import React, { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      onAdd(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="add-todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
      />
      <button onClick={handleAddTodo} className="add-button">
        Add Todo
      </button>
    </div>
  );
};

export default AddTodoForm;
