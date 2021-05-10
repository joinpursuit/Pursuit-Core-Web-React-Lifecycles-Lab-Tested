import React, { Component } from 'react';
import { toast } from 'react-toastify'

class Todo extends Component {
   componentDidMount() {
      toast.success(`New todo added: ${this.props.todo.text}`)
   }

   componentWillUnmount() {
      toast.error(`Todo deleted: ${this.props.todo.text}`)
   }

   render() {
      const { todo, handleRemove } = this.props
      return (
         <div>
            { todo.text }
            <button onClick={() => handleRemove(todo.id)} >x</button>
         </div>
      );
   }
}

export default Todo;