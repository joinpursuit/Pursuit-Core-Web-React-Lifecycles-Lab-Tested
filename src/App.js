import React from "react";
import { ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Todo from "./Todo"

class App extends React.Component {
 
  render() {
    return (
      <div className="app">
        <Todo />
        <ToastContainer/>
      </div>
    );
  }
}

export default App;
