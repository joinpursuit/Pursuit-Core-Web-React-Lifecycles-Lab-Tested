import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "./Components/Form";
import Todos from "./Components/Todos";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  state = { list: [] };

  addToDo = (todo) => {
    const Todo = { name: todo };
    this.setState((prevState) => ({
      list: [...prevState.list, Todo],
    }));
  };

  removeTodo = (name) => {
    const removeArr = this.state.list.filter((todo) => todo.name !== name);
    this.setState({ list: removeArr });
  };

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <Form addToDo={this.addToDo} />
        <ul id="todos">
          {this.state.list.map((todo) => (
            <Todos todo={todo} removeTodo={this.removeTodo} key={todo.name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
