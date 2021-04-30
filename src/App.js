// import React from "react";
// import { toast, ToastContainer } from "react-toastify";
// import ToDo from "./Components/ToDo"

// import "../node_modules/react-toastify/dist/ReactToastify.css";
// import "./App.css";

// class App extends React.Component {
//  const notify = () => toast();

//   render() {
//     return (
//       <div className="app">
//         <button onClick={notify}>Notify</button>
//         <ToastContainer />
//         <ToDo />
//         Give me something to do?!
//       </div>
//     );
//   }
// }


import React from "react";

import { ToastContainer, toast } from "react-toastify";
import ToDoForm from "./Components/ToDoForm"
import ToDoList from "./Components/ToDoList"
import ToDoListItem from "./Components/ToDoListItem"
import "react-toastify/dist/ReactToastify.css";
import uuid from "react-uuid";


class App extends React.Component {
  state = {
    todos: [{ id: 1, text: "Go To Work", completed: true }],
    userInput: "",
  };

  handleChange = (event) => this.setState({ userInput: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    const { userInput } = this.state;
    const newTodo = { id: uuid(), text: userInput, completed: false };
    this.addTodo(newTodo);
    this.setState({ userInput: "" });
  };

  addTodo = (todo) => {
    this.setState((prevState) => {
      return { todos: [todo, ...prevState.todos] };
    });
  };

  toggleTodo = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
      const newTodos = this.state.todos.filter(todo => {
        return todo.id !== id; 
      })
      this.setState({todos: newTodos})
  }

  componentDidMount() {
    const {todo} = this.props;
    toast.success(`new ToDo Added ${todo}`);
  }

  componentWillUnmount(){
    const {todo} = this.props;
    toast.error(`ToDo Deleted: ${todo}`);
  }
  
  

  render() {
    const { todos } = this.state;
    return (
      <section className={"ToDoAppContainer"}>
        <h1>Todo APP</h1>
        <ToDoForm
          addTodo={this.addTodo}
          userInput={this.state.userInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ToDoList
          todos={todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
      </section>
    );
  }
}

export default App;
