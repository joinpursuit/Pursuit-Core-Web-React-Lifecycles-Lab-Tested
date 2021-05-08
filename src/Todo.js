import React from 'react';
import { toast } from 'react-toastify';

class Todos extends React.Component {
    componentDidMount() {
        toast.success(`New todo added: ${this.props.todo.name}`)
    }


    componentWillUnmount() {
		toast.error(`Todo deleted: ${this.props.todo.name}`);
	}
    render() {
        const { todo, removeTodo } = this.props;
        return( 
            <div>
                <li>{todo.name}</li>
                <button onClick={() => removeTodo(todo.name)}>remove</button>
            </div>
        )
    }
}

export default Todos; 