import React from "react";

import Todos from "./Components/Todos";


import "./App.css";

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
       
        <Todos />
      </div>
    );
  }
}

export default App;
