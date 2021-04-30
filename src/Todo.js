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
        const {todo, removed, id} = this.props
        return (
            <div>
                <li>
                <div key={id}>
                {todo}
                <button onClick={() => removed(id)} >x</button>
                </div>
                </li>
            </div>
        )
    }
}

export default Todo