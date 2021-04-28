import React from "react";
import uuid from "react-uuid";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

class App extends React.Component {
  state = { todos: [{ id: "", text: "", completed: true }], userInput: "" };

  addTodo = (todo) => {
    const newTodo = { id: uuid(), text: todo };
    // debugger
    // console.log(newTodo);

    this.setState((prevState) => {
      return {todos: [...prevState.todos, newTodo]};
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState = { userInput: value };
    // console.log(userInput);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userInput } = this.state;
    // const newTodo = { id: uuid(), text: userInput, completed: false };
    // this.addTodo(newTodo);
    this.addTodo(userInput);
    // this.setState({ userInput: "" });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="app">
        <ToastContainer />
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <TodoList addTodo={this.addTodo} todos={todos} key={todos.id}/>
      </div>
    );
  }
}

export default App;
