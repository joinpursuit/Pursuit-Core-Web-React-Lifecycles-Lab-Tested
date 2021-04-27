import React from "react";

const TodoForm = ({handleSubmit, handleChange, userInput}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} placeholder="Enter a Todo" type="text" value={userInput} />
    </form>
  );
};

export default TodoForm;
