// import React, { Component } from 'react'
import React, { useEffect } from "react";
import { toast } from 'react-toastify';
import "./Todo.css"

import "../node_modules/react-toastify/dist/ReactToastify.css";

export default function Todo({ todo, removeTodo, index }) {
    useEffect(() => {
        toast.success(`New todo added: ${todo}`);
        return () => {
            toast.error(`Todo deleted: ${todo}`);
        }
        // eslint-disable-next-line
    }, [])
    
    return (
        <li>
            {todo}
            <button onClick={() => removeTodo(index)}>x</button>
        </li>
    )
}
/*
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
*/