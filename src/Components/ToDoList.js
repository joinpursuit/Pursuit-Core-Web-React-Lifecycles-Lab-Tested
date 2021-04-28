import React from 'react'
import ToDoListItem from "./ToDoListItem"

const ToDoList = ({todos}) => {
    return(
        <ul>
            {todos.map(todo => {
                return(
               <ToDoListItem todo={todo} /> 
                )
            })}
        </ul>
    )
} 

export default ToDoList