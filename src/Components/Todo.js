import React, { Component } from 'react'
import {toast} from "react-toastify"

export class Todo extends Component {

    componentDidMount(){
        toast.success(`New todo added: ${this.props.todo} `)
    }

    componentWillUnmount(){
        const {removed } = this.props
        toast.error(`Todo deleted: ${removed}`)
    }

    render() {
        const {todo, handleDelete} = this.props
        return (
            <div>
                <li>
                {todo}
                <button onClick={handleDelete}>x</button>
                </li>
            </div>
        )
    }
}

export default Todo
