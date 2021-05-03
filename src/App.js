import React from "react";
import { ToastContainer } from "react-toastify";
import Todo from './Todo';
import { v4 as uuid } from 'uuid'

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state={
      newTodo: '',
      todos:[]
    }
  }

  handleChange = (e) =>{
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const todo = {
      id: uuid(),
      text: this.state.newTodo
    }
    this.setState({
      // keep whatever is there, and just add todo at the end
      todos: [...this.state.todos, todo]
    })
  }

  remove = (id) =>{
    this.setState({
      todos: this.state.todos.filter((todo)=>todo.id !== id),
    })
  }


  render() {
    const { newTodo, todos } = this.state

    return (
      <div className="app">
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          {/* what you see in the input should be dictaed by whatever is held in this.state */}
          <input type='text' value={newTodo} name='newTodo' onChange={this.handleChange}/>
        </form>
        <ul id='todos'>
          {todos.map(todo=>{
            return <Todo key={todo.id} todo={todo} remove={this.remove}/>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
