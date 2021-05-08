import React from "react";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer} from "react-toastify";
import Todo from "./Todo";
import Form from "./Form";
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
        <ToastContainer/>
        <Form addToDo={this.addToDo} />
        <ul id="todos">
          {this.state.list.map((todo) => (
            <Todo todo={todo} removeTodo={this.removeTodo} key={todo.name} />
          ))}
        </ul>
      </div>
    );
  }
  }

export default App;
