import { Component } from "react";

import TodoItem from "./TodoItem";

class Todo extends Component {
  render() {
    const { todoList, removeTodo, toast } = this.props;
    return (
        <div>
      <ul id="todos">
        {todoList.map((todoItem) => {
          return (
            <TodoItem
              key={todoItem.id}
              toast={toast}
              todoItem={todoItem}
              removeTodo={removeTodo}
            />
          );
        })}
      </ul>
      </div>
    );
  }
}

export default Todo;
