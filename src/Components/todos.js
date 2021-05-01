import React, { Component } from 'react'
import {toast} from "react-toastify"

export default class todos extends Component {
    componentDidMount(){
        toast.success(`New todo added: ${this.props.todo}`)
    }
    componentWillUnmount(){
        toast.error(`Todo deleted: ${this.props.todo}`)
    }
    render(){
        return (
            <p>
                {this.props.todo}
                <button onClick={()=>this.props.remove(this.props.id)}>-</button>
            </p>
           )
    }
    
}
