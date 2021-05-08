import React from "react";
import uuid from "react-uuid";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { ToastContainer, toast } from "react-toastify";

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

    componentDidUpdate(){
        const {todoList} = this.state;
	    toast(`Remaining todos: ${todoList.length}`);
    }

	render() {
        const {todoList} = this.state;
        return (
            <div className="app">
                <ToastContainer />
                <TodoForm addToDo={this.addToDo} />
                <TodoList removeTodo={this.removeTodo} todoList={todoList} />
            </div>
        );
	}
}

export default App;