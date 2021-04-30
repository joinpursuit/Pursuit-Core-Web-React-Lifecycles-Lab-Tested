import React from 'react';
import { Component } from 'react';

class Form extends Component {
    state = {
        input: ""
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        const { input } = this.state
        this.props.addToDo(input);
        this.setState({input: ""})
    }

    handleInput = (e) => [
        this.setState({input: e.target.value})
    ]
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name='input' value={this.state.input} placeholder='Enter a ToDo' onChange={this.handleInput} >
                </input>
            </form>
        )
    }
}

export default Form;