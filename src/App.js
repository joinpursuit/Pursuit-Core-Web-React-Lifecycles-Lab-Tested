import React from "react";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import ToDo from "./ToDo";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      userInput:"",
      
    }
  }
  makeTodo = (e) => {
    const value = e.target.value
    const userInput = value
    this.setState ({userInput})
  }

  addToDo = (e) => {
    //get current userInput and current todos array
    //push userInput into todos array
    //update todos and make userInput empty string
    e.preventDefault()
    const { userInput, todos } = this.state
    todos.push(userInput)
    this.setState({todos, userInput:""})
  }

  render() {
    const { userInput, todos } = this.state
    return (
      <div className="app">
        <ToastContainer />
        Give me something to do?!
          <form onSubmit={this.addToDo}>
          <input type="text" value={userInput} name="" onChange={this.makeTodo} id=""/>
          <ToDo todos={todos} />
        </form>
      </div>
    );
  }
}

export default App;
