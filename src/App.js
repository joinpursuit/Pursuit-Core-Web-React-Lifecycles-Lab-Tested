import React, {useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
toast.configure()

const App = () => {
const [todos, setTodo] = useState([])

const addTodo = (todo) => {
  setTodo((prevTodo) => [...prevTodo, todo]);
}
 
 const removeTodo = (id) => {
    const filterArr = todos.filter((input) => input.id !== id)
    setTodo(filterArr)
  }


    return (
      <div className={"TodoContainer"}>
        <TodoForm toast={ToastContainer} addTodo={addTodo} />
        <TodoList removeTodo={removeTodo} todos={todos}/>
      </div>
    );
}


export default App;
