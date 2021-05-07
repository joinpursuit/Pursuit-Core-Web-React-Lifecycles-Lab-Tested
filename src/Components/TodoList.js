import React from "react";
import Todos from "./Todos";
import TodoListItem from "./TodoListItem";

let uuid = 1;
class TodoList extends React.Component {
  state = { todos: [] };

  addTodo = (listItem) => {
    const newTodo = { id: uuid++, type: listItem };
    this.setState((prevState) => ({ todos: [newTodo, ...prevState.todos] }));
  };

  removeTodo = (id) => {
    const filterArr = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: filterArr });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Todos addTodo={this.addTodo} />
        <TodoListItem removeTodo={this.removeTodo} todos={todos} />
      </div>
    );
  }
}

export default TodoList;
