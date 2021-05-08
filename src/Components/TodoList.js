import React from "react";
import Todos from "./Todos";
import TodoListItem from "./TodoListItem";
import { toast } from "react-toastify";

class TodoList extends React.Component {
  state = { todos: [] };

  addTodo = (listItem) => {
    // const newTodo = { id: listItem, type: listItem };
    this.setState((prevState) => ({ todos: [...prevState.todos, listItem] }));
  };

  removeTodo = (id) => {
    const filterArr = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: filterArr });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Todos addTodo={this.addTodo} todos={todos}/>
        <TodoListItem removeTodo={this.removeTodo} todos={todos} toast={toast}/>
      </div>
    );
  }
}

export default TodoList;
