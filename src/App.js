import React, { Component } from 'react'
import uuid from "react-uuid";
import TodoForm from "./Components/TodoForm"
import TodoList from "./Components/TodoList"
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css"
export default class App extends Component {
  state = {toDos:[]}
  addToDo = (input) =>{
    const newToDo = { id: uuid(), toDo: input }
    this.setState((prevState) => ({toDos: [...prevState.toDos, newToDo] }))
  }
  removeToDo = (id) => {
    const filteredTodos = this.state.toDos.filter(todo => {
      return todo.id !== id; 
    })
    this.setState({toDos: filteredTodos})
  }
  render() {
    return (
      <div className="app">
        <ToastContainer />
        <TodoForm addToDo={this.addToDo} />
        <TodoList removeToDo={this.removeToDo} toDos={this.state.toDos} />
      </div>
    )
  }
}