import React, { Component } from 'react'
import ToDoListItem from './ToDoListItem'

const ToDoList = ({toDos, removeToDos, toast}) => {
    return (
        <div>
            <ul id="todos">
            {toDos.map(toDo => {
                return <ToDoListItem key={toDo.id} toDo={toDo} removeToDos={removeToDos} toast={toast}/>
            })}
            </ul>
        </div>
    )

}

export default ToDoList;
