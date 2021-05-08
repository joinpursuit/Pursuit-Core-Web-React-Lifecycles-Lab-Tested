import React, { useState, useEffect, useRef} from "react";
import uuid from "react-uuid";
import Form from "./Components/Form";
import Todo from "./Components/Todo";
import { ToastContainer, toast } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
	const [todoList, setList] = useState([]);
	const didMount = useRef(false);

	const addToDo = (todo) => {
		const newTodo = { id: uuid(), name: todo };
		setList((prevList) => [...prevList, newTodo]);
	};

	const removeTodo = (id) => {
		const filterArr = todoList.filter((todo) => todo.id !== id);
		setList(filterArr);
	};

	useEffect(() => {
		if(didMount.current){
			toast(`Remaining todos: ${todoList.length}`);
		}else{
			didMount.current = true;
		}
	})

	return (
		<div className="app">
			<ToastContainer />
			<Form addToDo={addToDo} />
			<ul id="todos">
				{todoList.map((todo) => (
					<Todo todo={todo} removeTodo={removeTodo} key={todo.id} />
				))}
			</ul>
		</div>
	);
}

export default App;


// class App extends React.Component {
// 	state = { todoList: [] };

//   addToDo = (todo) => {
//     const newTodo = { id: uuid(), name: todo };
// 		this.setState((prevState) => ({
// 			todoList: [...prevState.todoList, newTodo],
// 		}));
// 	};

//   removeTodo = (id) => {
// 		const filterArr = this.state.todoList.filter((todo) => todo.id !== id);
// 		this.setState({ todoList: filterArr });
//   };

//   componentDidUpdate(){
// 	toast(`Remaining todos: ${this.state.todoList.length}`);
// }

// 	render() {
//     return (
// 			<div className="app">
// 				<ToastContainer />
// 				<Form addToDo={this.addToDo} />
// 				<ul id="todos">
// 					{this.state.todoList.map((todo) => (
// 						<Todo todo={todo} removeTodo={this.removeTodo} key={todo.id}/>
// 					))}
// 				</ul>
// 			</div>
// 		);
// 	}
// }