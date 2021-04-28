import React from "react";

let idItem = 1;

class TodoForm extends React.Component {
  state = { input: "" };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodoItem = { id: idItem++, type: this.state.input };
    const { addTodo } = this.props;
    addTodo(newTodoItem);
    this.setState({ input: "" });
  };

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={input} />
      </form>
    );
  }
}

export default TodoForm;