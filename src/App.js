import React from "react";
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import { ToastContainer, toast } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  state = { toDos: []}

  addToDo = (toDo) => {
    this.setState((prevState) => ({toDos: [...prevState.toDos, toDo]}))
  }

  removeToDos = (id) => {
    const filterArr = this.state.toDos.filter((toDo) => toDo.id !== id)
    this.setState({toDos: filterArr})
  }

  componentDidUpdate(prevState) {
    let count = this.state.toDos.length;
    toast(`Remaining todos: ${count}`)
  } 

  render() {
    const { toDos } = this.state;
    return (
      <div className="app">
        <ToDoForm addToDo={this.addToDo} ToastContainer={ToastContainer} toast={toast}/>
        <ToDoList toDos={toDos} removeToDos={this.removeToDos} toast={toast}/>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
