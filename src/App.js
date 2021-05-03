import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      memory: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      input: "",
      memory: [...prevState.memory, prevState.input],
    }));
  };

  handleChange = (e) => {
    this.setState((prevState) => ({
      input: e.target.value,
    }));
  };

  componentDidMount() {
    toast("Mounted!");
  }

  render() {
    console.log(this.state.input);
    console.log(this.state.memory);
    console.log(this.state.list);
    const li = this.state.memory.map((todo) => {
      return <li>{todo}</li>;
    });
    return (
      <div className="app">
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.input}
            placeholder="Enter a Todo"
            type="text"
          />
          <ul>{li}</ul>
        </form>
      </div>
    );
  }
}

export default App;
