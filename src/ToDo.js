import React, { Component } from 'react'

export default class ToDo extends Component {
    constructor(props) {
        super(props)
    }

    renderList = (todos) => {
       return todos.map((elem, i) =>{
            return (
                <li key={i}>{elem}</li>
            )
        })
    }
    render() {
        const { todos } = this.props
        if (todos.length === 0) {
            return null
        }  
        return (
            <ul>
                {this.renderList(todos)}
            </ul>
        )
    }
}
