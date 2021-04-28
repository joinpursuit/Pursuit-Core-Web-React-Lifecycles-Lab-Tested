import React from "react";
import { ToastContainer } from "react-toastify";
import Todos from "./Components/Todos";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Form from "./Components/Form";

class App extends React.Component {
  state = {
    todos: [{ id: 1, text: "", completed: true }],
    input: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ input: value });
    debugger
  };

  handleSubmit = (e) => {
    e.preventDefault();
 
    const { input } = this.state;
    const newToDo = { id: 1, text: input, completed: true };
    this.addToDo(newToDo);
    this.setState({ input: "" });
       debugger;
  };

  addToDo = (todo) => {
    this.setState((prevState) => {
      return { todos: [...prevState.todos, todo] };
    });
  };

  render() {
    const { input, todos } = this.state;
    return (
      <div className="App">
        <ToastContainer />
        <h4>Give me something to do?!</h4>
        <Form
          input={input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Todos input={input} todos={todos} />
      </div>
    );
  }
}

export default App;
