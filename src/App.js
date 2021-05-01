import React from "react";
import { ToastContainer } from "react-toastify";
import Todo from "./Components/Todo.js"
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Inputusers from "./Components/Inputusers.js";

class App extends React.Component {
  constructor(){
    super()
     this.state ={
         value: [],
         inputUser: ''
     }
}

addTOdo=(e)=>{
  e.preventDefault()
    this.setState({value: [...this.state.value, e.target.inputUser.value]})
}
handleBTN = (e)=>{
    console.log(e.target.value)
    this.setState({
      inputUser: e.target.value
    })
}
remove=(id)=>{
  const value = [...this.state.value]
  value.splice(id, 1)
  this.setState({value})
}
  render() {
    return (
      <div className="app">
        <ToastContainer />
        Give me something to do?!
        <Todo 
          inputUser={this.state.inputUser} 
          handleBTN={this.handleBTN}
          addTOdo={this.addTOdo}
         />

         <Inputusers remove={this.remove} value={this.state.value}/>

        
      </div>
    );
  }
}

export default App;
