import React from "react";
import { toast } from "react-toastify";

class Todo extends React.Component {
  componentDidMount() {
    const { todo } = this.props;
    toast.success(`New todo added: ${todo.text}`);
  }

  componentWillUnmount() {
    const { todo } = this.props;
    toast.error(`Todo deleted: ${todo.text}`);
  }

  render() {
    const { todo, removeTodo } = this.props;
    return (
      <>
        <p>
          {todo.text}
          <button onClick={() => removeTodo()}>X</button>
        </p>
      </>
    );
  }
}

export default Todo;
