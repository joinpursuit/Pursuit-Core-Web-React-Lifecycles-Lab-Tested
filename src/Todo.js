import React, { Component } from 'react'
import { toast } from 'react-toastify';
import "./Todo.css"

import "../node_modules/react-toastify/dist/ReactToastify.css";

export default class Todo extends Component {
    componentDidMount() {
        toast.success(`New todo added: ${this.props.todo}`)
    }
    componentWillUnmount() {
        toast.error(`Todo deleted: ${this.props.todo}`)
    }
    render() {
        const { todo, removeTodo, index } = this.props
        return (
            <li>
                {todo}
                <button onClick={() => removeTodo(index)}>x</button>
            </li>
        )
    }
}
