import React from "react";
import { toast } from "react-toastify";
toast.configure();

class TodoListItem extends React.Component {
  componentDidMount() {
    const {todo} = this.props
    toast.success(`New todo added: ${todo.text} `);
  }

  componentWillUnmount() {
    const {todo} = this.props
    toast.error(`Todo deleted: ${todo.text}`)
  }
  
  render() {
    const {removeTodo, todo} = this.props
    const { text, id } = todo;
    return (
      <div>
        <li className="userItem">{text}</li>
        <button onClick={() => removeTodo(id)}>-</button>
      </div>
    );
  }
}
export default TodoListItem;
