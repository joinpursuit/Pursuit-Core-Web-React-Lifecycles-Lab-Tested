import React from "react";
// import TodoListItem from './TodoListItem'

class Todos extends React.Component {
  state = { input: "" };

  handleInput = (e) => {
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} value={input} />
        </form>
      </div>
    );
  }
}

export default Todos;
