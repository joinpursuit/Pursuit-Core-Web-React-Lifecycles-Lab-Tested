import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Todos = ({todo, removeTodo}) => {
    useEffect(() => {
                toast.success(`New todo added: ${todo}`)
                return () => {
                toast.error(`Todo deleted: ${todo}`)
                }
    }, [])
    
   
        return( 
            <div>
                <li>{todo}</li>
                <button onClick={() => removeTodo(todo)}>x</button>
            </div>
        )
    
}

export default Todos;