import React from "react";
import { ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import ToDoApp from "./Components/ToDoApp"
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <ToDoApp />
      </div>
    );
  }
}

export default App;
