import React from "react";
import { ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Todo from "./Todo.js"
import {v4 as uuid} from "uuid";

class App extends React.Component {
  constructor() {
  super();
  this.state= {
    newTodo: "",
    todos: []
  }
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
    text:this.state.newTodo,
  }


this.setState({
  todos:[...this.state.todos, todo],
});

};
remove = (id) => {
  //using it withfilter

this.setState({
  todos: this.state.todos.filter((todo) => todo.id === id),
});
};

  render() {
    //const {newTodo} = this.state;
    const {newTodo, todos} = this.state;
    return (
      <div className="app">
        <ToastContainer />
        <form onSubmit={this.handleSubmit}> 
          <input type="text" value={newTodo} onChange={this.handleChange}/>
        </form>
    <ul id="todos">
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} remove={this.remove}/>

      })}


    </ul>
      </div>
    );
  }
}

export default App;
