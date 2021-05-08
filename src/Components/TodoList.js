import Todos from "./Todos";
import TodoListItem from "./TodoListItem";
import { toast } from "react-toastify";
import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos]  = useState([])

 const  addTodo = (listItem) => {
    setTodos((prevTodos) => ( [...prevTodos, listItem] ));
  };

  const removeTodo = (id) => {
    const filterArr = todos.filter((todo) => todo.id !== id);
    setTodos(filterArr );
  };

    return (
      <div>
        <Todos addTodo={addTodo} todos={todos}/>
        <TodoListItem removeTodo={removeTodo} todos={todos} toast={toast}/>
      </div>
    );
}

export default TodoList;
