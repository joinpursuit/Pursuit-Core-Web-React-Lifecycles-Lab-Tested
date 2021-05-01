import React, { Component } from "react";

class ToDoListItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { toast, toDo } = this.props;
    toast.success(`New todo added: ${toDo.text}`);
  }

  componentWillUnmount() {
    const { toast, toDo } = this.props;
    toast.error(`Todo deleted: ${toDo.text}`);
  }

  render() {
    const { toDo, removeToDos } = this.props;
    return (
        <li>
          {toDo.text}
          <button onClick={() => removeToDos(toDo.id)}>X</button>
        </li>
    );
  }
}

export default ToDoListItem;
