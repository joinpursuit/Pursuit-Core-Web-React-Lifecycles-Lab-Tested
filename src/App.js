import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Todos from "./Components/Todos"
import Form from "./Components/Form"

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [],
      todo: "",
      // removed: ""
    }
    this.removed =""
  }

  handleInput = (e) => {
      this.setState({todo: e.target.value})
  }

  handleKeyDown = (e) => {
      e.preventDefault()
      this.setState({todos: this.state.todos.concat(this.state.todo)})   
  }


  handleDelete = (idx) => {
    const todos = [...this.state.todos]

    this.removed = todos.splice(idx,1)
    // this.setState({removed: removed[0] , todos})
    this.setState({todos})
    
  }


  render() {
    return (
      <div className="app">
        <Form 
        handleInput = {this.handleInput}
        handleKeyDown = {this.handleKeyDown}
        />
        <Todos
        handleDelete = {this.handleDelete}
        todos = {this.state.todos}
        removed = {this.removed}
        />
        <ToastContainer />
        Give me something to do?!
      </div>
    );
  }
}

export default App;
