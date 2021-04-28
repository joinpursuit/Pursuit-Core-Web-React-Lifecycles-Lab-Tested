import React from "react";

class TodoForm extends React.Component {
  state = { input: "" };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.input);
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
