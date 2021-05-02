import React from "react";
import 'css-doodle';
import { ToastContainer,toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import Todos from './components/Todos'
import Form from './components/Form'

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      toDoList: [],
      task: ""
    }
  }

  taskCreator=(e)=>{
    const task = e.target.value
    this.setState({task})
  }

  addTask=(e)=>{
   e.preventDefault()
    this.setState({
      toDoList: this.state.toDoList.concat(this.state.task)
    })
  }

 removeTask=(idx)=>{
  const toDoList = [...this.state.toDoList]
  toDoList.splice(idx,1);
  this.setState({toDoList})
 }


 render () {
    return (
      <div className="app">
        <Form taskCreator={this.taskCreator} addTask={this.addTask}/>
        <Todos toDoList={this.state.toDoList} removeTask={this.removeTask} uuidv4={uuidv4} toast ={toast}/>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
