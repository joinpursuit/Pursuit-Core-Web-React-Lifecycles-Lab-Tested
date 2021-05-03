import React, { Component } from 'react'
import { toast } from "react-toastify";


export default class Todo extends Component {
    
    
    render() {
        console.log(`Component ${this.props.index}`)
        return (
            <div id='todos'>
                <p>{this.props.todo}</p>
                <button onClick={() => this.props.removeTodo(this.props.index)}>x</button>
            </div>
        )
    }
    componentDidMount() {
        toast.success(`New todo added: ${this.props.todo}`)
    }
    componentWillUnmount() {
        console.log(`This todo has been unmounted: ${this.props.todo}`)
        toast.error(`Todo deleted: ${this.props.todo}`)
    }

}
