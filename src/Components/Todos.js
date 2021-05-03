import React, { Component } from 'react'

export default class Todos extends Component {
    render() {
        const {handleTextChange} = this.props
        return (
            <form>
                <input 
                    id="input"
                    type="text" 
                    name="todo" 
                    placeholder="Enter a todo"
                    onChange={handleTextChange}
                />
            </form>
        )
    }
}
