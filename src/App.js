import React from "react";
import { ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Todos from "./Components/Todos";

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        todo:""
      }
    }

    handleTextChange = (e) => {
      const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }


  render() {
    
    return (
      <div className="app">
        <ToastContainer />
        <Todos handleTextChange={this.handleTextChange}/>
        <ul id="todos">

        </ul>
      </div>
    );
  }
}

export default App;
