import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    const { todoList, handleDelete } = this.props;

    const inputList = todoList.map((todo) => {
      return <Todo todo={todo} key={todo} handleDelete={handleDelete} />;
    });
    return (
      <div>
        <ol id="todos">{inputList}</ol>
      </div>
    );
  }
}
