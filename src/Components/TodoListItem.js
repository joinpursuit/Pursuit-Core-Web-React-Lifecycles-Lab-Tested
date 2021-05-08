import React, { useEffect } from "react"
import {  toast } from "react-toastify";

export default function TodoListItem({toDo ,removeToDo}) {
    
    useEffect(() => {
        toast.success(`New todo added: ${toDo.toDo}`)
        return () =>  toast.error(`Todo deleted: ${toDo.toDo}`)
    }, []);
    return (
        <li>{toDo.toDo}
        <button onClick={() => removeToDo(toDo.id)}>Delete ToDo</button>
    </li>
    )
}


// componentDidMount(){
//     toast.success(`New todo added: ${this.props.toDo.toDo}`)
//   }
//   componentWillUnmount(){
//     toast.error(`Todo deleted: ${this.props.toDo.toDo}`)
//   }