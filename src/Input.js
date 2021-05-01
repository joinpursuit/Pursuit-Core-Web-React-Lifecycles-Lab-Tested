import React from "react";

export default function Input(props) {
  return (
    <div>
      <form onSubmit={props.addTodo}>
        <input
          type="text"
          name="userInput"
          value={props.userInput}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}
