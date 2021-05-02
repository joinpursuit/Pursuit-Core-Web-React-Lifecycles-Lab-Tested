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
            <li>
                {this.props.item}
                <button onClick={()=>this.props.handleDelete(this.props.index)}>Delete</button>
            </li>
        )
    }
}

export default Item
