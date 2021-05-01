import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";

export default class Todo extends Component {
  componentDidMount() {
    toast.success(`New todo added: ${this.props.todo}`);
  }
  componentWillUnmount() {
    toast.error(`Todo deleted: ${this.props.todo}`);
  }
  render() {
    return (
      <li>
        {this.props.todo}{" "}
        <button onClick={() => this.props.removeTodo(this.props.idx)}>-</button>
      </li>
    );
  }
}
