import {useState} from 'react'
import uuid from 'react-uuid'

const ToDoForm = ({addToDo}) => {
    const [Todo, setTodo] = useState("")

    const handleInputChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newToDo = {id: uuid(), text: Todo}
        addToDo(newToDo);
        setTodo("")
    }
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="itemInput"></label>
                    <input  onChange={handleInputChange} id="itemInput" placeholder="Enter a Todo" value={Todo} />
                </form>
            </div>
        )
}

export default ToDoForm; 