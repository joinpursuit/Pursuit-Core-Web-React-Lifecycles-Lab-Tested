import {Component} from 'react'
import { toast } from 'react-toastify'

class Todo extends Component {
    componentDidMount(){
        toast.success(`New todo added: ${this.props.todo.text}`)
    }

render () {
    const { todo, remove } = this.props
    
    return <div>
        <p>{todo.text}</p>
        <button onClick={() => remove(todo.id)}>x</button>
    </div>
    }
}

export default Todo