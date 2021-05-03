import React from "react";
import { ToastContainer } from "react-toastify";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todoList: [],
    };
  }

  handleInput = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleDisplayList = (event) => {
    event.preventDefault();
    this.setState({ todoList: this.state.todoList.concat(this.state.todo) });
  };
  handleDelete = (i) => {
    const todoList = [...this.state.todoList];
    todoList.splice(i, 1);
    this.setState({ todoList });
  };

  render() {
    return (
      <div className="app">
        <Form
          handleInput={this.handleInput}
          handleDisplayList={this.handleDisplayList}
        />
        <TodoList
          handleDelete={this.handleDelete}
          todoList={this.state.todoList}
        />
        <ToastContainer />
        Give me something to do?!
      </div>
    );
  }
}

export default App;
