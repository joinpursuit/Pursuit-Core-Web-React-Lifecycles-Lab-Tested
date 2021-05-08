import React from "react";
import SeparateLi from './SeparateLi'

class TodoListItem extends React.Component {

 
  render() {
    const { todos, removeTodo, toast } = this.props;
    return (
      <ul id='todos'>
        {todos.map((todo) => {
          return <SeparateLi  removeTodo={removeTodo} todo={todo} toast={toast} key={todo.id}/>
        })}
      </ul>
    )
  }
}
  
  export default TodoListItem;
  
