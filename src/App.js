import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Todo from "./Todo.js";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import { v4 as uuid } from "uuid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todo: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let todo = { text: this.state.input, id: uuid() };
    this.setState((prevState) => ({
      todo: [...this.state.todo, todo],
      input: "",
    }));
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  removeLi = (id) => {
    let todo = this.state.todo.filter((elem) => {
      return elem.id !== id;
    });

    this.setState({ todo });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todo !== prevState.todo) {
      toast(`Remaining todos: ${this.state.todo.length}`);
    }
  }

  render() {
    console.log(this.state.input);
    console.log(this.state.todo);
    const li = this.state.todo.map((todo) => {
      return <Todo key={todo.id} remove={this.removeLi} todo={todo} />;
    });
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.input}
            placeholder="Enter a Todo"
            type="text"
          />
        </form>
        <ul id="todos">{li}</ul>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
