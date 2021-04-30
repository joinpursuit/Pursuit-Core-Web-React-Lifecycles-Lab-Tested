import React from 'react'
import ToDo from './ToDo'

function Todos (props) {
  const { toDoList, removeTask, toast, uuidv4 } = props
  const myList = toDoList.map((task, i) => {
    const uID = uuidv4()
    return (
      <ToDo
        key={task}
        idx={i}
        id={uID}
        toast={toast}
        task={task}
        toDoList={toDoList}
        removeTask={removeTask}
      />
    )
  })
  return <ul id='todos'>{myList}</ul>
}

export default Todos
