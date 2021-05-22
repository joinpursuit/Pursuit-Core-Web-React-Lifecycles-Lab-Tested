import React from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'
import {toast} from "react-toastify"

class ToDoApp extends React.Component{
    state = {todos: [{text:[]}]}
    addToDo = (todo) => {
        this.setState((prevState)=> {
            return{
                todos:[todo, ...prevState.todos]
            }
        })
    }
    removeToDo=(id) =>{
        const {todos} = this.state
        const filterArr=  todos.filter((todo)=>todo.id !== id)
        this.setState({todos: filterArr})
    }
    render() {
        const {todos} = this.state
        return(
            <div>
                <ToDoForm addToDo={this.addToDo} />
                <ToDoList todos={todos} removeToDo={this.removeToDo} toast={toast}/>
            </div>
        )
    }
}

export default ToDoApp