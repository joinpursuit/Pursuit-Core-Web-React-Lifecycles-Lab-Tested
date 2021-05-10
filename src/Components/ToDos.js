import React from "react";
import ToDo from "./ToDo";

class ToDos extends React.Component {
  state = { input: "" };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
      const { value } = e.target;
    this.setState({ input: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="ToDo">Add ToDo: </label>
        <input id="ToDo" onChange={this.handleChange} value={input} placeholder="Enter a ToDo" />
        <ToDo />
      </form>
    );
  }
}

export default ToDos;
