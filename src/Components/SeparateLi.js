import React, { useEffect } from "react";

const SeparateLi = ({ todo, removeTodo, toast }) => {
  useEffect(() => {
    toast.success(`New todo added: ${todo.type}`);
    return () => toast.error(`Todo deleted: ${todo.type}`);
  });
  return (
    <li>
      {todo.type}
      <button onClick={() => removeTodo(todo.id)}>x</button>
    </li>
  );
};
export default SeparateLi;
