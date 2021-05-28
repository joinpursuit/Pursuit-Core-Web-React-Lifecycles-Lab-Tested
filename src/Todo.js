import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [removeToast, setRemoveToast] = useState(false);
  const [todoID,setTodoID] = useState("")

  const addTodo = (todo) => {
    const newTodo = { id: todo, content: todo };

    setTodo(newTodo);
    setTodos([...todos, newTodo]);
    debugger
    setRemoveToast(false);
  };

  const removeTodo = (id) => {
    debugger
    setTodoID(id)
    const filterArr = todos.filter((item) => item.id !== id);
    setTodos(filterArr);
    setRemoveToast(true);
  };


  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoItem
        setRemoveToast={setRemoveToast}
        removeToast={removeToast}
        removeTodo={removeTodo}
        todos={todos}
        todo={todo}
        todoID={todoID}
      />
    </div>
  );
};

export default Todo;
