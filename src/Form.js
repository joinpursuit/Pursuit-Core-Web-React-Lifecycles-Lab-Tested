import React from 'react';
import { Component } from 'react';

class Form extends Component {
    state = {
        input: ""
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        this.props.addToDo(this.state.input)
        this.setState({input: ""})
    }

    handleInput = (e) => [
        this.setState({input: e.target.value})
    ]
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} placeholder='Enter text' onChange={this.handleInput} >
                </input>
            </form>
        )
    }
}

export default Form;