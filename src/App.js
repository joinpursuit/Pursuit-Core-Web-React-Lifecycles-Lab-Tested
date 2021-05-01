import React from "react";
import { ToastContainer } from "react-toastify";
import Todo from "./Todo"
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  state = {
    userInput: "",
    todos: [],
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length,
          text: this.state.userInput,
        },
      ],
    });
  };

  removeTodo(index) {
    const todos = this.state.todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    this.setState({ todos })
  }

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <form onSubmit={this.onSubmit}>
          <input
            onChange={(e) => this.setState({ userInput: e.target.value })}
            placeholder="Enter a Todo"
          />
        </form>
        <div id="todos">
          {this.state.todos.map((todo) => (
            <Todo key={`${todo.id}`} onClose={() => this.removeTodo(todo.id)}>
              {todo.text}
            </Todo>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
