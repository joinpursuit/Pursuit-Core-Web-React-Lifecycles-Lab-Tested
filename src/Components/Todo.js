import React from "react";
import { toast } from "react-toastify";
import "../index.css"

export default class Todo extends React.Component{

	componentDidMount() {
        const {todo} = this.props;
		toast.success(`New todo added: ${todo.name}`);
	}

	componentWillUnmount() {
        const {todo} = this.props;
		toast.error(`Todo deleted: ${todo.name}`);
	}
	render() {
		const { todo, removeTodo } = this.props;
		return (
			<div className="todo-item">
				<li key={todo.id}>{todo.name}
				    <button onClick={() => removeTodo(todo.id)}>-</button>
                </li>
			</div>
		);
	}
}