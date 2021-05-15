import { useState } from "react";
let idItem = 1;

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoItem = { id: idItem++, type: input };
    addTodo(newTodoItem);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={input} />
    </form>
  );
};

export default TodoForm;
