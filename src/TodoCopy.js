import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
// import uuid from 'react-uuid';

import { toast } from "react-toastify";

class Todo extends Component {
  state = { todos: [] };


  addTodo = (todo) => {
    const newTodo = { id: todo, content: todo };
    this.componentDidMount(newTodo.content);
    this.setState((prevState) => ({ todos: [...prevState.todos, newTodo] }));
    

  };
  removeTodo = (id) => {
    const filterArr = this.state.todos.filter((item) => item.id !== id);
    this.componentWillUnmount(id);
    this.setState({ todos: filterArr });
  };

  componentDidMount(newTodo) {
    //   debugger
    if (newTodo !== undefined) {
      toast.success(`New todo added: ${newTodo}`);
    }
  }
  componentWillUnmount(id) {
    toast.error(`Todo deleted: ${id}`);
  }

  componentDidUpdate(){
      const {todos} = this.state
      let count = todos.length
      toast(`Remaining todos: ${count}`)
  }
  render() {
    const { todos } = this.state;
    const { removeTodo } = this.props;
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoItem removeTodo={this.removeTodo} todos={todos} />
      </div>
    );
  }
}

export default Todo;
