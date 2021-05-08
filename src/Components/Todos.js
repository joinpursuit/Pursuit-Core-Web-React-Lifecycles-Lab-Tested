import React, { useState } from "react";

let uuid = 1;
const Todos = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: uuid++, type: input };
    addTodo(newTodo);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} value={input} />
      </form>
    </div>
  );
};

export default Todos;
