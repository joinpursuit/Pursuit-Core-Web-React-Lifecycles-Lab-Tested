import React, { Component } from 'react'
import {toast} from 'react-toastify'

export default class AddTo extends Component {

componentDidMount() {
    toast.success(`New todo added: ${this.props.input}`)
}

componentWillUnmount() {
    toast.error(`Todo deleted: ${this.props.input}`)
}
    render() {
        const { input, handleDelete, idx} = this.props
        return (
            <div>
                <li>
                    {input}  <button onClick={() => handleDelete(idx)}> X </button>
                </li>
            </div>
        )
    }
}
