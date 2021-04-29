import { Component } from "react";

const TodoItem = ({ todos, removeTodo}) => {

    
    
    
  return (
    <ul id="todos">
      {todos.map((todo) => {
          let id = todo.content
          return (
              <li>
            {todo.content}
            <button onClick={() => removeTodo(id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoItem;