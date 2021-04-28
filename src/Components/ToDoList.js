import React from "react";
import ToDo from "./ToDo";

class ToDoList extends React.Component {
  state = { input: "" , listOfToDos: []};

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState)=>{
        return { listOfToDos: [this.input,...prevState.listOfToDos]}
    })
  };

  handleInput = (e) => {
      console.log(e)
    const { name,value } = e.target
    this.setState({[name]: value})
  };

  render() {
      console.log(this.state.input)
      const { input} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="input" value={input} onChange={this.handleInput} />
        <ToDo handleSubmit={this.handleSubmit} />
      </form>
    );
  }
}

export default ToDoList;
