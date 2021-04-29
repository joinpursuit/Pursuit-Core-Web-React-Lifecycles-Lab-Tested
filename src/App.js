import React from "react";
import { ToastContainer} from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

import Todos from "./Components/Todos.js"
import Form from "./Components/Form.js"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todo: "",
      todos: [],
      // removed: "",
    }
  }

  handleInput = (e) => {
    this.setState ({
      todo: e.target.value,
    })
  }

  handleKeyDown = (e) => {
      e.preventDefault()
      
      this.setState ({
        todos: this.state.todos.concat(this.state.todo)
      })
    
  }

  handleDelete = (index) => {
    const todos = [...this.state.todos]
    todos.splice(index,1)
    this.setState ({
      todos:todos,
      // removed:removed
    })
  }

  render() {
    return (
      <div className="app">
        <div>
          <Form handleInput={this.handleInput} handleKeyDown={this.handleKeyDown}/>
          <Todos todos={this.state.todos} handleDelete={this.handleDelete}/>
        </div>
        <div>
          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default App;
