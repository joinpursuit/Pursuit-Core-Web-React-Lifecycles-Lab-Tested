import React from "react";
import { ToastContainer } from "react-toastify";
import Todos from "./Components/Todos"
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Form from "./Components/Form"

class App extends React.Component {
  state = {
    todos: [{ id: 1, text: "", completed: true }],
    input: "",
  };

  render() {
    const { input, todos } = this.state;
    return (
      <div className="app">
        <ToastContainer />
        Give me something to do?!
        <Form input={input}/>
        <Todos/>
      </div>
    );
  }
}

export default App;
