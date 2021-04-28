import React from "react";

const TodoListItem = ({ todo, deleteTodo }) => {
  const { text } = todo;

  return (
    <li>
      {text}
      <button onClick={this.handleClick}></button>
    </li>
  );
};

export default TodoListItem;
