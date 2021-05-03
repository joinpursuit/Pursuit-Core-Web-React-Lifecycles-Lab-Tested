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

  handleSubmit = (e) => {
    e.preventDefault()
    
    const todos = [...this.state.todos]
    const input = this.state.input


    this.setState({
      todos: [...todos, input],
    })
    e.target.reset()
  }
  handleInput = (e) => {
    const input = e.target.value

    this.setState({ input })
  }
  removeTodo = (index) => {
    const todos = [...this.state.todos]


    todos.splice(index, 1)
    this.setState({
      todos: todos,
    })
    console.log('removeTodo has been pressed', this.state.id)
  }


  render() {
    const input = this.state.input
    const todos = [...this.state.todos]

    const myTodos = todos.map((todo, index) => {
      return <Todo key={todo.keyId} id='todo' index={index} todo={todo} removeTodo={this.removeTodo} />
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