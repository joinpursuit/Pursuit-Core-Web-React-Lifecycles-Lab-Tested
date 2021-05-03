import React from "react";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import ToDo from "./components/ToDo";
import { v4 as uuid } from "uuid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      newTodo: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: uuid(),
      text: this.state.newTodo,
    };
    this.setState({
      toDos: [...this.state.toDos, todo],
    });
  
  };
  removeToDo = (id) => {
    this.setState({
      toDos : this.state.toDos.filter((todo)=> todo.id !== id)
    })
  };

  render() {
    const { toDos, newTodo } = this.state;

    return (
      <div className="app">
        <ToastContainer />
        <h1>To Do</h1>
        Give me something to do?!
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={this.handleChange}
            placeholder="So much to do..."
          />
        </form>
        <h4>To Do List</h4>
          <ul id="todos">
            {toDos.map((todo) => {
              return <ToDo key={todo.id} todo={todo} removeToDo={this.removeToDo} />;
            })}
          </ul>
      </div>
    );
  }
}
export default App;
