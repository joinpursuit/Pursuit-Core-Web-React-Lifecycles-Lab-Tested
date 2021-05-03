import React, { Component } from 'react'
import { toast } from 'react-toastify'

export default class Todo extends Component {
    
    componentDidMount(){
        toast.success(`New todo added: ${this.props.todo.text}`)
        }
    
        componentWillUnmount(){
        toast.error(`Todo deleted: ${this.props.todo.text}`)
        }
    
        render() {
        const {todo ,removeToDo} = this.props
            return (
                <div>
                   <p>{todo.text} </p> 
                   <button onClick={()=>removeToDo(todo.id)}>Remove</button>
                </div>
            )
        }
}
