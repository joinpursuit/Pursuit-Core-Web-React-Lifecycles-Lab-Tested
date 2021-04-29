import React from "react";
import { ToastContainer,toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo'

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      toDoList: [],
      task: ''
    }
  }

  componentDidUpdate() {
    // toast("App did update. Yay!");
    // console.log("---------------------");
  }

  taskCreator=(e)=>{
    const {value} = e.target
    this.setState({
      task: value
    })
  }

  addTask=(e)=>{
    //console.log('Task Added')
    e.preventDefault()
    const task = this.state.task
    this.setState({
      toDoList : [...this.state.toDoList, task]
    })

  }

 removeTask=(id)=>{
  console.log('Task Removed')
  console.log(id)
  const toDoList = [...this.state.toDoList]

  
  

 }


  render() {
    const toDoList = this.state.toDoList
    const newList = toDoList.map((toDo,i)=>{
      return(
        <Todo 
        key = {i}
        id = {uuidv4()}
        toast ={toast}
        toDo={toDo}
        toDoList={toDoList}
        removeTask = {this.removeTask}
        />
      )
    })
    return (
      <div className="app">
        <ToastContainer />
        <form onSubmit={this.addTask}>

          <input type="text" placeholder="Enter a ToDo" onChange={this.taskCreator}/>
        </form>
        <ul id="todos">
          {newList}
        </ul>
      </div>
    );
  }
}

export default App;
