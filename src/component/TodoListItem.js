import React from "react";

const TodoListItem = ({ todo, deleteTodo }) => {
  const { text } = todo;

  return (
    <li>
      {text}
      {console.log(text)}
      <button>x</button>
    </li>
  );
};

export default TodoListItem;
