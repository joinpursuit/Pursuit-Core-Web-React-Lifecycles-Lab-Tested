import React from "react";
import { ToastContainer } from "react-toastify";

import { Todo } from "./Todo";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  state = {
    input: "",
    todos: [],
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length,
          text: this.state.input,
        },
      ],
    });
  };

  removeTodo = (id) => {
    const index = this.state.todos.findIndex((todo) => todo.id === id);
    this.setState({
      todos: [...this.state.todos.slice(0, index), ...this.state.todos.slice(index + 1)],
    });
  };

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <form onSubmit={this.onSubmit}>
          <input
            onChange={(event) => this.setState({ input: event.target.value })}
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
