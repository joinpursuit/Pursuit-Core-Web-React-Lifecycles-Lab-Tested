import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <ul id="todos">
      {props.todoList.map((todo, i) => {
        return (
          <Todo removeTodo={props.removeTodo} todo={todo} key={todo} idx={i} />
        );
      })}
    </ul>
  );
}
