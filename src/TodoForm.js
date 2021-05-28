import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
  
const [input, setInput] = useState("")

  const handleInputChange = (e) => {
   setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    addTodo(input);
    setInput("");
  };

 
    
    return (
      <form onSubmit={handleSubmit} id={input}>
        <input
          onChange={handleInputChange}
          className="ToDoInput"
          value={input}
          placeholder="Enter a Todo"
        />
      </form>
    );
  
}

export default TodoForm;
