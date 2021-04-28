import React from "react";
import ToDo from "./ToDo";

let id = 1;
class ToDoList extends React.Component {
  state = { input: "", listOfToDos: [] };

  handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { id: id++, type: e.target.input.value };
    this.setState((prevState) => ({
      listOfTodos: [newTodo, ...prevState.listOfToDos],
    }));
    console.log(this.state.listOfToDos)
    // this.setState((prevState)=>{
    //     return { listOfToDos: [this.input,...prevState.listOfToDos]}
    // })
    // console.log(this.state.listOfTodos)
  };

  handleInput = (e) => {
    console.log(e);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state.listOfToDos);
    const { input} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="input" value={input} onChange={this.handleInput} />
        <ToDo handleSubmit={this.handleSubmit} list={this.state.listOfToDos} />
      </form>
    );
  }
}

export default ToDoList;
