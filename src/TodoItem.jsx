import React from "react";

const TodoItem = ({ todo, onRemoveTask }) => {
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => onRemoveTask(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
