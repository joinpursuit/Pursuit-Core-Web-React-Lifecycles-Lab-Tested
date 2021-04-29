import React, { Component } from 'react'
import {toast} from "react-toastify"

export class Todo extends Component {

    componentDidMount(){
        toast.success(`New todo added: ${this.props.todo} `)
    }

    componentWillUnmount(){
        toast.error(`Todo deleted: ${this.props.todo}`)
    }

    render() {
        const {todo, handleDelete, idx} = this.props
        return (
            <div>
                <li>
                {todo}
                <button onClick={() => handleDelete(idx)} >x</button>
                </li>
            </div>
        )
    }
}

export default Todo
