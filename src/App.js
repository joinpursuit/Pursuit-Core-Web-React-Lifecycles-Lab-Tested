import React from "react";
import uuid from "react-uuid"
import Form from './Components/Form'
import Todo from './Components/Todo'
import { ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state ={ todoList: []}
  }
  addToDo =(todo)=>{
    const newTodo ={ id: uuid(), name: todo};
      this.setState((prevState) => ({
        todoList: [...prevState.todoList],
      
      }))
    
  }
  removeTodo =(id)=>{
    const filterArr = this.state.todoList.filter((todo)=>todo.id !==id
    )
    this.setState({todoList: filterArr})
  }
  render() {
    return (
      <div className="app">
        <ToastContainer />
        <Form addToDo ={this.addToDo} />
        <ul id ="todos">
       
<Todo todo ={todo} removeTodo ={this.removeTodo} key ={todo.id} />
     
       </ul>
      </div>
    );
  }
}

export default App;