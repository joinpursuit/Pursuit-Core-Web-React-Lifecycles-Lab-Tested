import React from "react";
import {v4 as uuid} from 'uuid'

import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

import Form from './components/Form'
import Todo from './components/Todo'



class App extends React.Component {

  constructor() {
    super()

    this.state = {
      input: '',
      todos: [],
    }
  }

  handleInput = (e) => {
    const input = e.target.value

    this.setState({ input })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    
    const todos = [...this.state.todos]
    const id = uuid()
    const text = this.state.input
    const todo = {id, text}

    this.setState({
      todos: [...todos, todo],
      input: ''
    })
    e.target.reset()
  }
  removeTodo = (id) => {
    const todos = [...this.state.todos]
    const idx = todos.findIndex((todo) => todo.id === id)

    todos.splice(idx, 1)
    this.setState({
      todos: todos,
    })
  }


  render() {
    const input = this.state.input
    const todos = [...this.state.todos]

    const myTodos = todos.map((todo, index) => {
      return <Todo id='todo' key={todo.id} index={index} todo={todo} removeTodo={this.removeTodo} />
    })

    return (
      <div className="app">
        <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit} input={input} />
        {myTodos}
        <ToastContainer />
      </div>
    );
  }
}

export default App;