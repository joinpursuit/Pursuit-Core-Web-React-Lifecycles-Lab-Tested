import React, { Component } from 'react'

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
