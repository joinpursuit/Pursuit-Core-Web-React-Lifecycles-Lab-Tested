import React, { Component } from 'react'

export class Form extends Component {

    render() {

        const { handleChange, handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit}>
               <input type="text" onChange={handleChange} ></input>
            </form>
        )
    }
}

export default Form

