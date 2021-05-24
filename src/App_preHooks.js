import React from "react";
import { ToastContainer } from "react-toastify";
import Todos from "./Components/Todos";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Form from "./Components/Form";


class App extends React.Component {
  state = {
    todos: [],
    input: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { input } = this.state;
    const newToDo = { text: input };
    this.addToDo(newToDo);
    this.setState({ input: "" });
  };

  addToDo = (todo) => {
    this.setState((prevState) => {
      return { todos: [...prevState.todos, todo] };
    });
  };

  deleteToDo = (item) => {
    const { todos } = this.state;
    const filterArr = todos.filter((todo) => {
      return item.text !== todo.text;
    });
    this.setState({ todos: filterArr });
  };

  render() {
    const { input, todos } = this.state;
    return (
      <div className="App">
        <ToastContainer />
        <h4>Give me something to do?!</h4>
        <Form
          input={input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Todos todos={todos} deleteToDo={this.deleteToDo} />
      </div>
    );
  }
}

export default App;
