import React from "react";

const FilterTodo = ({ onFilterChange }) => {
  return (
    <div className="filter-todo">
      <label>
        Show:
        <select
          onChange={(e) => onFilterChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </label>
    </div>
  );
};

export default FilterTodo;
