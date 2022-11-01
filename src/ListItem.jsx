import React from "react";
import TodoItem from "./TodoItem";

const ListItem = ({ todos, onRemoveTask }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem todo={todo} onRemoveTask={onRemoveTask} />;
      })}
    </div>
  );
};

export default ListItem;
