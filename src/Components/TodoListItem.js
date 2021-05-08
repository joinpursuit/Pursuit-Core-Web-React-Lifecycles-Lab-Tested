import React from "react";
import SeparateLi from './SeparateLi'

const TodoListItem = ({todos, removeTodo, toast}) => {

    return (
      <ul id='todos'>
        {todos.map((todo) => {
          return <SeparateLi  removeTodo={removeTodo} todo={todo} toast={toast} key={todo.id}/>
        })}
      </ul>
    )
}
  
  export default TodoListItem;
  
