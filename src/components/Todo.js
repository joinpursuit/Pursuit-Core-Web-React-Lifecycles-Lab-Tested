import React, { Component } from 'react'
import { toast } from "react-toastify";


export default class Todo extends Component {

    
    render() {

        const { todo, removeTodo } = this.props
        
        return (
            <div id='todos'>
                <p>{todo.text}</p>
                <button onClick={() => removeTodo(todo.id)}>x</button>
            </div>
        )
    }
    componentDidMount() {
        toast.success(`New todo added: ${this.props.todo.text}`)
    }
    componentWillUnmount() {
        console.log(`This todo has been unmounted: ${this.props.todo.text}`)
        toast.error(`Todo deleted: ${this.props.todo.text}`)
    }
}
