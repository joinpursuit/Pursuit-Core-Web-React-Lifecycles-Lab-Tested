import React from "react";
import { ToastContainer, toast } from "react-toastify";
class Todo extends React.Component {
    state={todo: this.props.todo}
	componentDidMount() {
		toast.success(`New todo added: ${this.state.todo.name}`);
	}

    componentWillUnmount() {
        toast.error(`todo deleted: ${this.state.todo.name}`);
    }
    
    componentDidUpdate(prevProps) {
        console.log(prevProps)
    }

	render() {
		const { todo, removeTodo } = this.props;
		return (
			<div>
				<li>{todo.name}</li>
				<button
					onClick={() => {
						removeTodo(todo.id);
					}}
				>
					x
				</button>
				<ToastContainer />
			</div>
		);
	}
}

export default Todo;
