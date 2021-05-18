// import React from "react";
// import { ToastContainer } from "react-toastify";
// import Form from "./Components/Form";
// import TodoList from "./Components/TodoList";

// import "../node_modules/react-toastify/dist/ReactToastify.css";
// import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       todo: "",
//       todoList: [],
//     };
//   }

//   handleInput = (event) => {
//     this.setState({ todo: event.target.value });
//   };

//   handleDisplayList = (event) => {
//     event.preventDefault();
//     this.setState({ todoList: this.state.todoList.concat(this.state.todo) });
//   };
//   handleDelete = (i) => {
//     const todoList = [...this.state.todoList];
//     todoList.splice(i, 1);
//     this.setState({ todoList });
//   };

//   render() {
//     return (
//       <div className="app">
//         <Form
//           handleInput={this.handleInput}
//           handleDisplayList={this.handleDisplayList}
//         />
//         <TodoList
//           handleDelete={this.handleDelete}
//           todoList={this.state.todoList}
//         />
//         <ToastContainer />
//         Give me something to do?!
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleInput(event) {
    setTodo(event.target.value);
  }

  function handleDisplayList(event) {
    event.preventDefault();
    setTodoList(todoList.concat(todo));
  }

  function handleDelete(i) {
    const list = [...todoList];

    setTodoList(list.splice((i, 1)));
  }

  return (
    <div className="app">
      <Form handleInput={handleInput} handleDisplayList={handleDisplayList} />
      <TodoList handleDelete={handleDelete} todoList={todoList} />
      <ToastContainer />
      Give me something to do?!
    </div>
  );
}
