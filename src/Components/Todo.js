import { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";

toast.configure();
class Todo extends Component {
  notify = () => {
    const { todoList, removeTodo } = this.props;
    todoList.forEach(todoItem => {

        toast.success(`New todo added: ${todoItem}`);
    })
  };

  componentDidMount() {
    this.notify();
  }
  render() {
    const { todoList, removeTodo } = this.props;
    return (
      <ul id="todos">
        <ToastContainer />
        {todoList.map((todoItem) => {
          return (
            <li key={todoItem.id}>
              {todoItem.type}
              <button onClick={() => removeTodo(todoItem.id)}>x</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Todo;
