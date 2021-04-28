import React from "react";

function Form({input,todos}) {
  const handleChange = (e) => {
    const { value } = e.target;
    this.setState({ input: value });

    // debugger
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // debugger;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">Add Todo</label>
      <input onChange={handleChange} id="input" value={input} />
    </form>
  );
}

export default Form;
