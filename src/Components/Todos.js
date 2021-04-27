import React from 'react'
import TodoForm from './TodoForm'

let id = 1

class Todos extends React.Component {

    state={todoList: []}

    addToDo =(todo)=>{
        const newTodoItem = {key: id++, type: todo}
         this.setState((prevState)=>({todoList: [newTodoItem, ...prevState.todoList]}))
    }


    render() {
        return (
            <div>
                <TodoForm addToDo={this.addToDo}/>
                {/* <Todo/> */}
            </div>
        )
    }
}

export default Todos
