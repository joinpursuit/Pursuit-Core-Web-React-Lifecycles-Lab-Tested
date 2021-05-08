import React from "react";
import { ToastContainer } from "react-toastify";
import TodoList from './Components/TodoList'
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <TodoList />
      </div>
    );
  }
}

export default App;
