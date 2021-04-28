import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div>
      <ul id="todos">
        {todos.map((todo) => {
          return (
            <TodoItem removeTodo={removeTodo} todo={todo} key={todo.id} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
