import TodoListItem from './TodoListItem';
import React from 'react'

export default function TodoList({ toDos, removeToDo }) {

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
