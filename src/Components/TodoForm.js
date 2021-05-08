import React, { useState } from "react";
import uuid from "react-uuid";
// import { ToastContainer, toast } from "react-toastify";
// import "../../node_modules/react-toastify/dist/ReactToastify.css";
// toast.configure()

const TodoForm = ({addTodo}) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput( e.target.value );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newtodo = { id: uuid(), text: input };
    addTodo(newtodo);
    setInput( "" );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Enter a Todo"
          onChange={handleChange}
          type="text"
          value={input}
        />
      </label>
    </form>
  );
};

export default TodoForm;
