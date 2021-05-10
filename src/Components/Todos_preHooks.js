import React from "react";
import Todo from "./Todo";

class Todos extends React.Component {
  render() {
    const { todos, deleteToDo } = this.props;
    return (
      <ul id="todos">
        {todos.map((todo) => {
          return <Todo todo={todo} deleteToDo={deleteToDo} key={todo.text} />;
        })}
      </ul>
    );
  }
}

export default Todos;
