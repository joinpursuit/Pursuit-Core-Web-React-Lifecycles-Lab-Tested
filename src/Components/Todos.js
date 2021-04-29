import React from 'react'
import Todo from "./Todo"


function Todos(props) {
    const {todos, handleDelete} = props


const list = todos.map((todo, i )=> {
    // return <Todo todo={todo} key = {i} handleDelete={handleDelete} idx={i} />
    return <Todo todo={todo} key = {todo} handleDelete={handleDelete} idx={i} />
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
