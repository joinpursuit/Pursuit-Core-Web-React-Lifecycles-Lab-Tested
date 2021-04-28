import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import TodoForm from "./TodoForm"
import Todo from "./Todo";

// let idItem = 1;


class Todos extends React.Component {
  state = { todoList: [] };

  removeTodo= (id) => {
    const filterArr = this.state.todoList.filter((item) => item.id !==id)
    this.setState({todoList: filterArr})
}

  addTodo = (todo) => {
    // const newTodoItem = { id: idItem++, type: todo };
    this.setState((prevState) => ({
      todoList: [ ...prevState.todoList, todo],
    }));
  };

     componentDidUpdate() {
       let count=this.state.todoList.length
       toast(`Remaining todos: ${count}`)
    }

  


  render() {
      const {todoList} = this.state
    return (
      <div>
          <ToastContainer />
        <TodoForm addTodo={this.addTodo} />
        <Todo toast={toast} removeTodo={this.removeTodo} todoList={todoList} />
      </div>
    );
  }
}

export default Todos;
