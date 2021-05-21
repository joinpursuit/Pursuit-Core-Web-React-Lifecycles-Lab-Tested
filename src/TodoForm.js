// import React, { Component } from 'react'
import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [ input, setInput ] = useState("");
    
    const formSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target.todo;
        if (value.trim()) {
            addTodo(value);
        }
        setInput("");
    }

    const inputChange = (e) => setInput(e.target.value);
    
    return (
        <form onSubmit={formSubmit}>
            <input
                type="text"
                name="todo"
                placeholder="Enter a todo"
                onChange={inputChange}
                value={input}
            />
        </form>
    )
}
/*
export default class TodoForm extends Component {
    constructor(){
        super()
        this.state = { input: "" }
    }
    formSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(e.target.todo.value)
        this.setState({ input: "" })
    }
    inputChange = (e) => {
        this.setState({ input: e.target.value })
    }
    render() {
        return (
            <form onSubmit={this.formSubmit}>
              <input
                type="text"
                name="todo"
                placeholder="Enter a todo"
                onChange={this.inputChange}
                value={this.state.input}
              />
            </form>
        )
    }
}
*/