import React, { Component } from 'react'

export default class TodoForm extends Component {
    state = { input: "" }
    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addToDo(this.state.input)
		this.setState({ input: "" })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input value={this.state.input} onChange={this.handleChange} placeholder="Add a ToDo" />
                </label>
            </form>
        )
    }
}
