import React from "react";
import { toast } from "react-toastify";

export class Todo extends React.Component {
  componentDidMount() {
    toast(`New todo added: ${this.props.children}`, { type: "success" });
  }

  componentWillUnmount() {
    toast(`Todo deleted: ${this.props.children}`, { type: "error" });
  }

  render() {
    return (
      <div>
        {this.props.children}
        <button onClick={this.props.onClose}>x</button>
      </div>
    );
  }
}
