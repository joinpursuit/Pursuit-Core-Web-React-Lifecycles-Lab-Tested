import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoListItem removeTodo={removeTodo} todo={todo} key={todo.id} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
