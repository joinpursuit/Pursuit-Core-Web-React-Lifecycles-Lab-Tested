import React from "react";


const ToDoListItem = ({ todo }) => {
  const { text } = todo;
  return <li>{text}</li>;
};

export default ToDoListItem;
