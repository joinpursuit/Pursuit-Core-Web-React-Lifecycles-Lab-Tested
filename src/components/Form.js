import React from 'react'

function Form (props) {
  return (
    <form onSubmit={props.addTask}>
      <input
        type='text'
        placeholder='Enter a ToDo'
        onChange={props.taskCreator}
      />
    </form>
  )
}

export default Form
