import React, { Component } from 'react'
import {toast, ToastContainer} from 'react-toastify';
export class Item extends Component {
    componentDidMount() {
        toast.success(`New todo added: ${this.props.item}`);
      }
    componentWillUnmount() {
        toast.error(`Todo deleted: ${this.props.item}`);
      }
    render() {

        return (
            <ul id='todos'> 
                <p>{this.props.item}</p>
                <button onClick={()=>this.props.handleDelete(this.props.index)}>x</button>
            </ul>
        )
    }
}

export default Item
