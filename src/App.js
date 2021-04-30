import React from "react";
import { ToastContainer, toast } from "react-toastify";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import uuid from 'react-uuid'

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todosList: [] };
  }
  addTodo = (todo) => {
    const obj = { id: uuid(), task: todo }
    this.setState({ todosList: [...this.state.todosList, obj] })
  };
  removeTodo = (index) => {
    const arr = [...this.state.todosList]
    arr.splice(index, 1)
    this.setState({ todosList: arr })
  }
  componentDidUpdate() {
      toast(`Remaining todos: ${this.state.todosList.length}`)
  }
  render() {
    return (
      <div className="app">
        <ToastContainer />
        <TodoForm
          addTodo={this.addTodo}
        />
        <ul id="todos">
          {this.state.todosList.map((todo, i) => (
            <Todo
              todo={todo.task}
              removeTodo={this.removeTodo}
              index={i}
              key={todo.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
