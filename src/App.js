import React from "react";
import { ToastContainer } from "react-toastify";
import Todo from './Todo';
import Form from './Form';
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      todos: [],
      input: '',
    }
  }

  input = (e) => {
     this.setState({input: e.target.value})
  }

  dropDown = (e) => {
    e.preventDefault()
    this.setState({todos: this.state.todos.concat(this.state.input)})
  }

  handleDelete= (idx) => {
    const todos = [...this.state.todos]
    todos.splice(idx,1)
    this.setState({todos})
  }

  render() {
    return (
      <div className="app">
        <Form
        input = {this.input}
        dropDown = {this.dropDown}
        />
        <Todo
        handleDelete = {this.handleDelete}
        todos = {this.state.todos}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
