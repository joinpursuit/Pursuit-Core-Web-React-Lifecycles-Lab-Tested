import React, { Component } from "react";
import { toast } from "react-toastify";

export default class Todo extends Component {
  componentDidMount() {
    toast.success(`New todo added: ${this.props.todo}`);
  }

  componentWillUnmount() {
    toast.error(`Todo deleted: ${this.props.todo}`);
  }

  render() {
    const { todo, handleDelete, i } = this.props;
    return (
      <div>
        <li>
          {todo}
          <button onClick={() => handleDelete(i)}>-</button>
        </li>
      </div>
    );
  }
}
