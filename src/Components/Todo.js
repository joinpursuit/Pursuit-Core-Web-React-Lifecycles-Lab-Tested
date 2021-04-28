import React from "react";

function Todo({ input, todos }) {
  return (
    <ul>
      <li>
        {todos.text}
        <button>x</button>
      </li>
    </ul>
  );
}

export default Todo;
