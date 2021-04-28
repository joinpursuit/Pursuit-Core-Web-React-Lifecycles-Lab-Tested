import React from "react";
import Todo from "./Todo";

class Todos extends React.Component {
  render() {
    const { input, todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => {
          return <Todo input={input} todos={todos} />;
        })}
      </ul>
    );
  }
}

export default Todos;
