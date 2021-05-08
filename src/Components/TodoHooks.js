import React from "react";

import TodoItemHooks from "./TodoItemHooks";

const TodoHooks = ({ todoList, removeTodo, toast }) => {
    return (
        <div>
      <ul id="todos">
        {todoList.map((todoItem) => {
          return (
            <TodoItemHooks
              key={todoItem.id}
              toast={toast}
              todoItem={todoItem}
              removeTodo={removeTodo}
            />
          );
        })}
      </ul>
      </div>
    );
  
}

export default TodoHooks;
