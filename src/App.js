import React from "react";
import { ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import ToDo from "./Components/ToDo"
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <ToDo />
      </div>
    );
  }
}

export default App;
