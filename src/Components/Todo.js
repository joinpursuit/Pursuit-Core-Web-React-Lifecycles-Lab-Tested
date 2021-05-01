import React from 'react'
import { toast, ToastContainer } from "react-toastify";

class Todo extends React.Component {
    
        componentDidMount(){
            toast.success(`New todo added: ${this.props.todo.name}`)
        }
        componentWillUnmount(){
            toast.error(`todo deleted: ${this.props.todo.name}`);
        }

       
    
    render() {
        const { todo, removeTodo } =this.props
        return (
            <div>
                <li key ={todo.id}>{todo.name}</li>
                <button onClick ={() =>{
                    removeTodo(todo.id);
                }}> x </button>
                <ToastContainer /> 
            </div>
        )
    }
}

export default Todo
