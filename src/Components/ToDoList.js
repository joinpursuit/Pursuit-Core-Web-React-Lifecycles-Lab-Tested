import React from "react";
import ToDo from "./ToDo";
import 'react-toastify/dist/ReactToastify.css';

class ToDoList extends React.Component {
  state = { input: "", listOfToDos: [] };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { listOfToDos: [this.state.input, ...prevState.listOfToDos] };
    });
    this.setState({ input: "" });
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDeleteListItem = (e) => {
    const { name } = e.target;
    const { listOfToDos } = this.state;
    this.setState({
      listOfToDos: listOfToDos.filter((todo) => {
        return todo !== name;
      }),
    });
  };

 

  render() {
    const { input, listOfToDos} = this.state;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input name="input" value={input} onChange={this.handleInput} />
        </form>
        {listOfToDos.map((todo) => {
            return (
              <ToDo
                key={todo}
                todo={todo}
                handleDeleteListItem={this.handleDeleteListItem}
              />
            );
          })}

      </section>
    );
  }
}

export default ToDoList;
