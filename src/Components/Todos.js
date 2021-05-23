import { useEffect } from "react";
import { toast } from 'react-toastify';

const Todo = ({ todo, deleteToDo }) => {
    useEffect(() => {
      toast.success(`New todo added: ${todo.text}`);
      return () => {
        toast.error(`Todo deleted: ${todo.text}`);
      }
    }, [todo.text])

   render() {
    return (
      <li className="todos">
        {todo.text}
        <button onClick={() => deleteToDo(todo)}>x</button>
      </li>
    );
  }
}

export default Todos; 
