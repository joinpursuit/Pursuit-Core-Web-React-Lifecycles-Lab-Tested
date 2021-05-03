import React from "react";
import Form from "./Components/Form";
import Todo from "./Components/Todo";
// import { v4 as uuid } from "uuid";
import { ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoList: [],
      input: "",
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ todos: this.state.todos.concat(this.state.input) });
  };

  remove = () => {};

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Todo add={this.add} remove={this.remove} input={this.input} />
      </div>
    );
  }
}

export default App;
