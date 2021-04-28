import { Component } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "../../node_modules/react-toastify/dist/ReactToastify.css";

// toast.configure();

class TodoItem extends Component {
  componentDidMount() {
    const { todoItem, toast } = this.props;
    toast.success(`New todo added: ${todoItem.type}`);
  }

 
  componentWillUnmount() {
    const { todoItem, toast } = this.props;
    toast.error(`Todo deleted: ${todoItem.type}`);
  }

  render() {
    const { todoItem, removeTodo } = this.props;
    return (
      <li>
        {todoItem.type}
        <button onClick={() => removeTodo(todoItem.id)}>x</button>
      </li>
    );
  }
}

export default TodoItem;
