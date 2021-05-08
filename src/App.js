import uuid from "react-uuid";
import TodoForm from "./Components/TodoForm"
import TodoList from "./Components/TodoList"
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css"

import React, { useState } from "react";

export default function App() {
  const [toDos ,setTodos] = useState([])
  
  const addToDo = (input) =>{
    const newToDo = { id: uuid(), toDo: input }
    setTodos((prevState) => ( [...prevState, newToDo] ))
  }
  const removeToDo = (id) => {
    const filteredTodos = toDos.filter(todo => {
      return todo.id !== id; 
    })
    setTodos((prevTodao) => filteredTodos)
  }
  return (
    <div className="app">
    <ToastContainer />
    <TodoForm addToDo={addToDo} />
    <TodoList removeToDo={removeToDo} toDos={toDos} />
  </div>
  )
}
