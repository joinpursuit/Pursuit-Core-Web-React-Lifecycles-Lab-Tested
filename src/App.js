import React from "react";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Todo from "./ToDo"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }
  render() {
    return (
      <div className="app">
        <ToastContainer />
        Give me something to do?!
      </div>
    );
  }
}

export default App;
