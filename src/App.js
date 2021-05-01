import React from "react";
import { toast, ToastContainer } from "react-toastify";
import TodoList from "./TodoList";
import Input from "./Input";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      userInput: "",
    };
  }

  addTodo = (e) => {
    e.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, e.target.userInput.value],
    });
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ userInput: e.target.value });
  };

  removeTodo = (idx) => {
    console.log("remove todo was pressed");
    const todoList = [...this.state.todoList];
    todoList.splice(idx, 1);
    this.setState({ todoList });
  };

  render() {
    return (
      <div className="app">
        <ToastContainer />
        Give me something to do?!
        <Input
          userInput={this.state.userInput}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
        />
        <TodoList removeTodo={this.removeTodo} todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
