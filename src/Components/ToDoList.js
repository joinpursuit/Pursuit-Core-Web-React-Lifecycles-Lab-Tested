import React from 'react'
import ToDoListItem from './ToDoListItem';

const ToDoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoListItem
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default ToDoList; 