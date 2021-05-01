import React from 'react'


const TodoListItem = ({todos, removeTodo}) => {

    console.log({todos})
    return(<ul>
        {todos.map((todo) => {
          return <li key={todo.id}>
              {todo.type}
          <button onClick={() => removeTodo(todo.id)}>Delete Item</button>
          </li>;
        })}
      </ul>
      )
}

export default TodoListItem