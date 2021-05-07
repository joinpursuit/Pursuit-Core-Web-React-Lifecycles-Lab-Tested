import React from "react";
import { toast, ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import TodosForm from "./Components/TodosForm"
import TodoList from "./Components/TodoList"


let uid = 1;
class App extends React.Component {
  state = { todos: []}

  addToDo = (todo) => {
    
    const newToDo = {id: uid++, text: todo}
    this.setState((prevState) => ({
      todos: [...prevState.todos, newToDo]
    }))
  }

  removeTodo = (id) => {

    const filterArr = this.state.todos.filter((input) => input.id !== id)
    this.setState({todos: filterArr})
  }


  componentDidUpdate(){
    const { todos } = this.state
    let count = todos.length
      toast(`Remaining todos: ${count}`)
    
}

  render() {
    const { todos } = this.state
    return (
      <div className="app">
        <TodosForm addToDo={this.addToDo} />
        <TodoList todos={todos} removeTodo={this.removeTodo}/>
        <ToastContainer />
    
      </div>
    );
  }
}

export default App;
