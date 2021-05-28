import React from "react";

class ShoppingForm extends React.Component {
  state = { input: "" };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.input);
    this.setState({input: ""});
  };

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.handleSubmit} id={this.state.input}>
        <input
          onChange={this.handleInputChange}
          className="ToDoInput"
          value={input}
          placeholder="Enter a Todo"
        />
      </form>
    );
  }
}

export default ShoppingForm;
