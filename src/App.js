import React from "react";
import { ToastContainer , toast} from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Form from './Components/Form'
import ToDo from './Components/Todo'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItem: [],
      todo : '',
    }
  }
  handleInput = (event) => {
    this.setState({todo: event.target.value})
  }
  handleItem = (event) => {
    event.preventDefault()
    this.setState({listItem : [...this.state.listItem, event.target.todo.value]})
  }
  handleDelete = (idx) => {
    const listItem = [...this.state.listItem]
    listItem.splice(idx, 1)
    this.setState({listItem})
  }
  render() {
    return (
      <div className="app">
        <div>
          <Form handleInput={this.handleInput} handleItem = {this.handleItem} todo={this.state.todo}/>
          <ToDo handleDelete = {this.handleDelete} listItem = {this.state.listItem} />
        </div>
        <div>
          <ToastContainer />
        </div>


      </div>
    );
  }
}

export default App;
