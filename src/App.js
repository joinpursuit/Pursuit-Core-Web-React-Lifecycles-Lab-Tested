import React from "react";
import Form from './Components/Form';
import Todo from './Components/Todo';
import { ToastContainer } from "react-toastify";
import { v4 as uuid } from 'uuid';

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [],
    todo: ''
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: uuid(),
      text: this.state.todo
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  remove = (id) => {
    this.setState({
      todos: this.state.todos.filter((newTodo) => newTodo.id !== id)
    })
  }


  render() {
    const { todos } = this.state
    const listItem = todos.map(todo => {
      return <Todo todo={todo} remove={this.remove} key={todo.id} />
    })

    return (
      <div className="app">
        <ToastContainer />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <ul id='todos'>
          {listItem}
        </ul>
      </div>
    );
  }
}

export default App;
