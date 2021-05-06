import React from "react";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
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
