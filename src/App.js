import React from "react";
import { ToastContainer } from "react-toastify";
import Todos from "./Components/Todos";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <ToastContainer />
        <Todos />
      </div>
    );
  }
}

export default App;
