import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import TodoFormHooks from "./TodoFormHooks";
import TodoHooks from "./TodoHooks";

// let idItem = 1;

const TodosHooks = () => {
  const [todoList, setTodoList] = useState([]);

  const removeTodo = (id) => {
    const filterArr = todoList.filter((item) => item.id !== id);
    setTodoList(filterArr);
  };

  const addTodo = (todo) => {
    // const newTodoItem = { id: idItem++, type: todo };
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
  };

  // componentDidUpdate() {
  //    let count=this.state.todoList.length
  //    toast(`Remaining todos: ${count}`)
  // }

  useEffect(()=>{
           let count=todoList.length
     toast(`Remaining todos: ${count}`)
  })

  return (
    <div>
      <ToastContainer />
      <TodoFormHooks addTodo={addTodo} />
      <TodoHooks toast={toast} removeTodo={removeTodo} todoList={todoList} />
    </div>
  );
};

export default TodosHooks;
