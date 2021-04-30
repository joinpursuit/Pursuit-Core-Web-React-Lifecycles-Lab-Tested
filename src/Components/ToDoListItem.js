import React, { Component } from "react";
import { toast } from "react-toastify";
// import "./TodoListItem.css";
// const id = todo.id
// const text = todo.text
// const completed = todo.completed

const TodoListItem = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, text, completed } = todo;

  const removeTodo = (e) => {
    e.stopPropagation();
    deleteTodo(id);
  };

//   componentDidMount() {
//     toast(`New ToDo added: ${todo}`)
//   };

 


  return (
    <li className={completed ? "completed" : ""} onClick={() => toggleTodo(id)}>
      {text}
      <button onClick={removeTodo}>Delete Todo</button>
    </li>
  );
};

export default TodoListItem;