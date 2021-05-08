import {React, useState, useEffect} from "react";
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import { ToastContainer, toast } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [toDos, setToDos] = useState([])

  useEffect(() => {
    let count = toDos.length;
      toast(`Remaining todos: ${count}`)
  },)

  const addToDo = (toDo) => {
    setToDos((prevToDos) => ([...prevToDos, toDo]))
  }

  const removeToDos = (id) => {
    const filterArr = toDos.filter((toDo) => toDo.id !== id)
    setToDos(filterArr)
  }

    return (
      <div className="app">
        <ToDoForm addToDo={addToDo} ToastContainer={ToastContainer} toast={toast}/>
        <ToDoList toDos={toDos} removeToDos={removeToDos} toast={toast}/>
        <ToastContainer />
      </div>
    );
}

export default App;
