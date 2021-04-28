import React from "react";
import Todo from "./Todo";

class Todos extends React.Component {
  render() {
    const { input, todos } = this.state;
    return <Todo input={input} todos={todos} />;
  }
}

export default Todos;
