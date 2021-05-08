import React from "react";

class SeparateLi extends React.Component {

  componentDidMount() {
    const { toast, todo } = this.props;
    toast.success(`New todo added: ${todo.type}`);
  }

  componentWillUnmount() {
    const { toast, todo } = this.props;
    toast.error(`Todo deleted: ${todo.type}`);
  }
  render() {
    const { todo, removeTodo } = this.props;
    return (
      <li>
        {todo.type}
        <button onClick={() => removeTodo(todo.id)}>x</button>
      </li>
    );
  }
}
export default SeparateLi;
