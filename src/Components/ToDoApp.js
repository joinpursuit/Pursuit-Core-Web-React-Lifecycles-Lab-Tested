import React from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

class ToDoApp extends React.Component{
    state = {todos: [{text:""}]}
    addToDo = (todo) => {
        this.setState((prevState)=> {
            return{
                todos:[todo, ... prevState.todos]
            }
        })
    }
    render() {
        const {todos} = this.state
        return(
            <div>
                <ToDoForm addToDo={this.addToDo} />
                <ToDoList todos={todos}/>
            </div>
        )
    }
}

export default ToDoApp