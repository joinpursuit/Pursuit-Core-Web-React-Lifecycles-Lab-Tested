import React, { useEffect, useState, useRef } from "react";
import uuid from "react-uuid";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { ToastContainer, toast } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const didMount = useRef(false);

    const addToDo = (todo) => {
        const newTodo = { id: uuid(), name: todo };
        setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    }

    const removeTodo = (id) => {
        const filterArr = todoList.filter((todo) => todo.id !== id);
        setTodoList(filterArr);
    };
    useEffect(()=> {
        if(didMount.current){
            toast(`Remaining todos: ${todoList.length}`);
        } else {
            didMount.current=true;
        }
    },[todoList])
    return (
        <div className="app">
            <ToastContainer />
            <TodoForm addToDo={addToDo} />
            <TodoList removeTodo={removeTodo} todoList={todoList} />
        </div>
    );
}

// class App extends React.Component {
// 	state = { todoList: [] };

//     addToDo = (todo) => {
//         const newTodo = { id: uuid(), name: todo };
//         this.setState((prevState) => ({
//             todoList: [...prevState.todoList, newTodo],
//         }));
// 	};

//     removeTodo = (id) => {
//         const {todoList} = this.state;
// 		const filterArr = todoList.filter((todo) => todo.id !== id);
// 		this.setState({ todoList: filterArr });
//     };

//     componentDidUpdate(){
//         const {todoList} = this.state;
// 	    toast(`Remaining todos: ${todoList.length}`);
//     }

// 	render() {
//         const {todoList} = this.state;
//         return (
//             <div className="app">
//                 <ToastContainer />
//                 <TodoForm addToDo={this.addToDo} />
//                 <TodoList removeTodo={this.removeTodo} todoList={todoList} />
//             </div>
//         );
// 	}
// }

export default App;