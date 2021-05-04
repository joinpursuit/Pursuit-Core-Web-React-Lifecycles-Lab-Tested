
import TodoListItem from './TodoListItem';
import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    const { toDos, removeToDo } = this.props
    const listTodos = toDos.map(toDo =>{
      return (
      <TodoListItem key={toDo.id} toDo={toDo} removeToDo={removeToDo}/>)
    })
    return (
      <ul id="todos">
        {listTodos}
      </ul>
    )
  }
}

