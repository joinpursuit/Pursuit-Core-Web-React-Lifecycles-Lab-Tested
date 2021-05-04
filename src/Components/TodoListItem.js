import React, { Component } from 'react'
import {  toast } from "react-toastify";

export default class TodoListItem extends Component {
    componentDidMount(){
        toast.success(`New todo added: ${this.props.toDo.toDo}`)
      }
      componentWillUnmount(){
        toast.error(`Todo deleted: ${this.props.toDo.toDo}`)
      }
    render() {
        return (
            <li>{this.props.toDo.toDo}
                <button onClick={() => this.props.removeToDo(this.props.toDo.id)}>Delete ToDo</button>
            </li>
        )
    }
}





