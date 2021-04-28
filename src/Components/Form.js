import React, { Component } from 'react'

export class Form extends Component {
    render() {
        const {handleInput,handleKeyDown} = this.props
        return (
            <div>
                <form onSubmit={handleKeyDown}>
                    <input onChange={handleInput}></input>
                </form>
            </div>
        )
    }
}

export default Form;
