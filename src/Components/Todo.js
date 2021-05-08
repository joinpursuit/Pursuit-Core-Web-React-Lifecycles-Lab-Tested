import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "../index.css"
const Todo = ({ todo, removeTodo }) => {

	useEffect(() => {
		toast.success(`New todo added: ${todo.name}`);
		return () => {
			toast.error(`Todo deleted: ${todo.name}`);
		}
	}, [todo.name])
	return (
		<div className="todo-item">
			<li key={todo.id}>{todo.name}</li>
			<button onClick={() => {
				removeTodo(todo.id);}}>x</button>
		</div>
	);
}

export default Todo;

// class Todo extends React.Component{

// 	componentDidMount() {
// 		toast.success(`New todo added: ${this.props.todo.name}`);
// 	}

// 	componentWillUnmount() {
// 		toast.error(`Todo deleted: ${this.props.todo.name}`);
// 	}
// 	render() {
// 		const { todo, removeTodo } = this.props;
// 		return (
// 			<div className="todo-item">
// 				<li key={todo.id}>{todo.name}</li>
// 				<button onClick={() => {
// 						removeTodo(todo.id);
// 					}}
// 				>
// 					x
// 				</button>
// 			</div>
// 		);
// 	}
// }
