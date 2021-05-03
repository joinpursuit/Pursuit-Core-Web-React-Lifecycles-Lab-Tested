import React from "react";
import Form from './Components/Form'
import Todos from './Components/Todos'
import { ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: [],
      listItem: ''
    }
  }

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <Todos />
        <Form />
      </div>
    );
  }
}

export default App;
