import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Todo from "./Todo";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todos: [],
    };
  }

  componentDidUpdate(previousProps, previousState) {
    const { todos } = this.state;
    if (todos.length !== previousState.todos.length) {
      toast(`Remaining todos: ${todos.length}`);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { input, todos } = this.state;
    const todo = { id: todos.length, text: input };
    this.setState({
      todos: [...todos, todo],
    });
  };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  removeTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  };

  renderTodos = () => {
    const { todos } = this.state;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={() => {
            this.removeTodo(todo.id);
          }}
        />
      );
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter a todo"
            onChange={this.handleInput}
            type="text"
          />
        </form>
        <div id="todos">{this.renderTodos()}</div>
      </div>
    );
  }
}

export default App;
