import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const Todos = () => {
  const [todoList, setTodoList] = useState([]);

  const removeTodo = (id) => {
    const filterArr = todoList.filter((item) => item.id !== id);
    setTodoList(filterArr);
  };

  const addTodo = (todo) => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
  };

  useEffect(() => {
    let count = todoList.length;
    toast(`Remaining todos: ${count}`);
  });

  return (
    <div>
      <ToastContainer />
      <TodoForm addTodo={addTodo} />
      <Todo toast={toast} removeTodo={removeTodo} todoList={todoList} />
    </div>
  );
};

export default Todos;
