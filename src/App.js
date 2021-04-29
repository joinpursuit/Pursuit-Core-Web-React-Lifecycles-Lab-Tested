import React from "react";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

import Todos from "./Todos"
import Form from "./Form"

class App extends React.Component {
  constructor(){
    super()
    
    this.state = {
      todos: [],
      todo: "",
    }
  }

  input = (e) => {
      this.setState({
        todo: e.target.value
      })
  }

  todoStateFunc = (e) => {
      e.preventDefault()
      this.setState({
        todos: this.state.todos.concat(this.state.todo)
      })   
  }


  removed = (id) => {
    const todos = this.state.todos.filter((input) => input.id !== id)
    this.setState({
      todos
    })
  }



  render() {
    return (
      <div className="app">
        <Form 
        input = {this.input}
        todoStateFunc = {this.todoStateFunc}
        />
        <Todos
        removed = {this.removed}
        todos = {this.state.todos}
        />
        <ToastContainer />
        Give me something to do?!
      </div>
    );
  }
}

export default App;
