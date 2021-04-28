import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

let idItem = 1;

class Todos extends React.Component {
  state = { todoList: [] };

  removeTodo= (id) => {
    const filterArr = this.state.todoList.filter((item) => item.id !==id)
    this.setState({todoList: filterArr})
}

  addTodo = (todo) => {
    const newTodoItem = { id: idItem++, type: todo };
    this.setState((prevState) => ({
      todoList: [newTodoItem, ...prevState.todoList],
    }));
  };

  render() {
      const {todoList} = this.state
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <Todo removeTodo={this.removeTodo} todoList={todoList} />
      </div>
    );
  }
}

export default Todos;
