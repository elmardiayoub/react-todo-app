import React from "react";

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={onToggle}
        className="todo-text"
      >
        {todo.title}
      </span>
      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
