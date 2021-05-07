import React from 'react'


const TodoListItem = ({todos, removeTodo}) => {

    console.log({todos})
    return(<ul>
        {todos.map((todo) => {
          return <li key={todo.id} id="todos">
              {todo.type}
          <button onClick={() => removeTodo(todo.id)}>-</button>
          </li>;
        })}
      </ul>
      )
}

export default TodoListItem