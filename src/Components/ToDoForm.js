import React from "react";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input : "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = {text : this.state.input}
    this.props.addToDo(newToDo)
  };

  handleChange = (e) => {
  
    this.setState({input: e.target.value})
  };


  render() {
    const { enterToDo } = this.state;
    return (
      <div>
        <h1>ToDo</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.input}
          />
          <ul>{enterToDo}</ul>
        </form>
      </div>
    );
  }
}

export default ToDo;
