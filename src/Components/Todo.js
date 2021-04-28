import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "../index.css"
class Todo extends React.Component {

	componentDidMount() {
		toast.success(`New todo added: ${this.props.todo.name}`);
	}

	componentWillUnmount() {
		toast.error(`Todo deleted: ${this.props.todo.name}`);
	}
	render() {
		const { todo, removeTodo } = this.props;
		return (
			<div className="todo-item">
				<li key={todo.id}>{todo.name}</li>
				<button onClick={() => {
						removeTodo(todo.id);
					}}
				>
					x
				</button>
			</div>
		);
	}
}

export default Todo;
