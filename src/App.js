import React from 'react'
import Form from './Components/Form'
import Todo from './Components/Todo'
import { ToastContainer, toast } from 'react-toastify'
import { v4 as uuid } from 'uuid'

import '../node_modules/react-toastify/dist/ReactToastify.css'
import './App.css'

class App extends React.Component {
	state = {
		todos: [],
		todo: '',
	}

  componentDidUpdate() {
    const count = this.state.todo.length
    toast(`Remaining todos: ${count}`)
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

  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  handleRemove = (id) => {
    this.setState({
      todos : this.state.todos.filter((newTodo) => newTodo.id !== id)
    })
  }

	render() {
		const { todos } = this.state

		const listItm = todos.map((todo) => {
			return <Todo todo={todo} handleRemove={this.handleRemove} key={todo.id}/>
		})

		return (
			<div className='app'>
				<ToastContainer />
				<Form handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
				<ul id='todos'>{listItm}</ul>
			</div>
		)
	}
}

export default App
