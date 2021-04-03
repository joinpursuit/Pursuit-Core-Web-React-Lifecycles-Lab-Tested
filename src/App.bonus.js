import React from "react";
import { toast, ToastContainer } from "react-toastify";

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
      todos: [...this.state.todos, this.state.input],
    });
  };

  removeTodo = (index) => {
    this.setState({
      todos: [...this.state.todos.slice(0, index), ...this.state.todos.slice(index + 1)],
    });
  };

  componentDidUpdate(_, previousState) {
    if (previousState.todos.length !== this.state.todos.length) {
      toast(`Remaining todos: ${this.state.todos.length}`);
    }
  }

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
          {this.state.todos.map((todo, index) => (
            <Todo key={`${todo}-${index}`} onClose={() => this.removeTodo(index)}>
              {todo}
            </Todo>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
