import React from "react";
import uuid from "react-uuid";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import TodoForm from "./component/TodoForm";
import TodoListItem from "./component/TodoListItem";

class App extends React.Component {
  state = { todos: [{id: 1, text: "", completed: true}], userInput: ""}

  handleSubmit = (e) => {
    e.preventDefault();
    const { userInput } = this.state;
    const newTodo = { id: uuid(), text: userInput, completed: false };
    this.addTodo(newTodo);
    this.setState({userInput: ""});
  }
  
  handleChange = (e) => {
    const {value} = e.target
    this.setState = ({userInput: value})
  }

  addTodo = (todo) => {
    this.setState((prevState) => {
      return { todos: [todo, ...prevState.todos] };
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="app">
        <ToastContainer />
        <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        {/* <TodoListItem todos={todos}/> */}
      </div>
    );
  }
}

export default App;
