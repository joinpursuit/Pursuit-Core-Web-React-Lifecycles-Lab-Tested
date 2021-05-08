import React from "react";
// import TodoListItem from './TodoListItem'
// import {  toast } from "react-toastify";

let uuid = 1
class Todos extends React.Component {
  state = { input: "" };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: uuid++, type: this.state.input};
    const { addTodo } = this.props;
    addTodo(newTodo);
    this.setState({ input: "" });
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} value={input} />
        </form>
      </div>
    );
  }
}

export default Todos;
