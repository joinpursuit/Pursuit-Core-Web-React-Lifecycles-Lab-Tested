import React from "react";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { enterToDo: "" };
    this.state = {
        input : "",
    }
  }
        // const obj= {enterToDo: []}

  handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = {text : this.state.input}
    this.props.addToDo(newToDo)
  };

  handleChange = (e) => {
    // const { input, value} = e.target
    // this.setState( { [input]: value})
    this.setState({input: e.target.value})
  };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const { enterToDo } = this.state;
    return (
      <div>
        <h1>ToDo</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            id="#todos"
            name="enterToDo"
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
