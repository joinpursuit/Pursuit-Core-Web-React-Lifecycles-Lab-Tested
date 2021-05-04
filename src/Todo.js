import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

export class Todo extends Component {
  componentDidMount() {
    toast.success(`New todo added: ${this.props.todo.text}`);
  }

  componentWillUnmount() {
    toast.error(`Todo deleted: ${this.props.todo.text}`);
  }

  render() {
    const { todo, remove } = this.props;
    return (
      <li>
        <span>{todo.text}</span>
        <button
          onClick={() => {
            remove(todo.id);
          }}
        >
          X
        </button>
      </li>
    );
  }
}

export default Todo;
