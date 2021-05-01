import React, { Component } from 'react'
import uuid from 'react-uuid'

class ToDoForm extends React.Component {
    state = { Todo: ""}

    handleInputChange = (e) => {
        this.setState({Todo: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { addToDo } = this.props;
        const newToDo = {id: uuid(), text: this.state.Todo}
        addToDo(newToDo);
        this.setState({Todo: ""})
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="itemInput"></label>
                <input  onChange={this.handleInputChange} id="itemInput" placeholder="Enter a Todo" value={this.state.Todo} />
            </form>
            </div>
        )
    }
}

export default ToDoForm; 