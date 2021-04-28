import React from "react";
import uuid from "react-uuid";
import Form from "./Components/Form";
import Todo from "./Components/Todo";
import { ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
	state = { todoList: [] };
  addToDo = (todo) => {
    const newTodo = { id: uuid(), name: todo };
		this.setState((prevState) => ({
			todoList: [...prevState.todoList, newTodo],
		}));
	};

  removeTodo = (id) => {
		const filterArr = this.state.todoList.filter((todo) => todo.id !== id);
		this.setState({ todoList: filterArr });
  };
  

  
	render() {
    console.log(this.state.todoList);
    return (
			<div className="app">
				<ToastContainer />
				<Form addToDo={this.addToDo} />
				<ul id="todos">
					{this.state.todoList.map((todo) => (
						<Todo todo={todo} removeTodo={this.removeTodo} />
					))}
				</ul>
			</div>
		);
	}
}

export default App;
