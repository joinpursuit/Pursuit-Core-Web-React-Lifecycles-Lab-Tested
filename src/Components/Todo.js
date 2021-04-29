
import React, { Component } from 'react'
import {toast}  from "react-toastify"

export class todo extends Component {
    
    componentDidMount () {
        // const {todo} = this.props
        toast.success(`New todo added: ${this.props.todo}`)
    }

    componentWillUnmount () {
        // const {todo} = this.props
        toast.error(`Todo deleted: ${this.props.todo}`)
    }

    render() {
        const {todo,handleDelete} = this.props
        return (
            <div>
                {todo}
                <button onClick={handleDelete}>X</button>
            </div>
        )
    }
}

export default todo;
