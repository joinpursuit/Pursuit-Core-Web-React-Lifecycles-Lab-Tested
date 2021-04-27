import React from "react";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import TodoForm from "./component/TodoForm";

class App extends React.Component {
  state = { todos: [{id: 1, text: "", completed: true}], userInput: ""}
  
  render() {
    return (
      <div className="app">
        <ToastContainer />
        <TodoForm />
      </div>
    );
  }
}

export default App;
