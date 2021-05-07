import React from "react";
import { ToastContainer, toast } from "react-toastify";


class TodoItem extends React.Component {
  componentDidMount() {
    const { todo } = this.props;
    toast.success(`New todo added: ${todo.text}`);
  }

  componentWillUnmount() {
    const { todo } = this.props;
    // const todo = this.state.todos[id].text 
    toast.error(`Todo deleted: ${todo.text}`);
  }

  render() {
    const { todo, removeTodo } = this.props;
    return (
      <li key={todo.id}>
        {todo}
        <button onClick={() => removeTodo(todo.id)}> x </button>
        <ToastContainer />
      </li>
    );
  }
}

export default TodoItem;
