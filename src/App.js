import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Form from "./Components/Form";
import Todos from "./Components/Todos";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = { text: input };
    addToDo(newToDo);
    setInput("");
  };

  const addToDo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  };

  const deleteToDo = (item) => {
    const filterArr = todos.filter((todo) => {
      return item.text !== todo.text;
    });
    setTodos(filterArr);
  };

  return (
    <div className="App">
      <ToastContainer />
      <h4>Give me something to do!</h4>
      <Form
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Todos todos={todos} deleteToDo={deleteToDo} />
    </div>
  );
};

export default App;
