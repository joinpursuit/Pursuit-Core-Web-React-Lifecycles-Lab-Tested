import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
toast.configure()

class App extends React.Component {
state = { todos: [] };

  addTodo = (todo) => {
    this.setState((prevState) => {
      return { todos: [todo, ...prevState.todos] };
    });
  };
  
 
  removeTodo = (id) => {
    const filterArr = this.state.todos.filter((input) => input.id !== id)
    this.setState({todos: filterArr})
  }


  render() {
    const { todos } = this.state;
    return (
      <div className={"TodoContainer"}>
        <TodoForm toast={ToastContainer} addTodo={this.addTodo} />
        <TodoList removeTodo={this.removeTodo} todos={todos}/>
      </div>
    );
  }
}


export default App;
