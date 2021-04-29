import React from 'react'
import Todo from "./Todo"


function Todos(props) {
    const {todos, removed} = props



    return (
        <div>
            <ul id="todos">
                {todos.map((todo, i)=> {
                     return (
                     <Todo todo={todo} key = {todo.id} removed={removed} idx={i} />
                     );
                    })}
            </ul>
        </div>
    )
}


export default Todos