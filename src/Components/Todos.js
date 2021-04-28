import React from 'react'
import Todo from "./Todo"

function Todos(props) {
    const {todos, handleDelete, removed} = props


const list = todos.map((todo, i )=> {
    return <Todo todo={todo} key = {i} handleDelete={handleDelete} idx={i} removed={removed}/>
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
