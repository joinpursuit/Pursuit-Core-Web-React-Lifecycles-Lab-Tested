import React from 'react'
import Todo from "./Todo.js"

function Todos(props) {
    const {todos,handleDelete,removed} = props

    const list = todos.map((todo,i) => {
        return (
            <Todo todo={todo} removed={removed} key={i} index={i} handleDelete={handleDelete}/>
        )
    })
    return (
        <div>
            <ul id="todos">
                {list}
            </ul>
        </div>
    )
}

export default Todos
