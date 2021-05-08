import React, { useEffect, useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import TodosForm from "./Components/TodosForm";
import TodoList from "./Components/TodoList";

let uid = 1;
const App = () => {
  const [todos, setTodos] = useState([]);
  const didMount = useRef(false)
  
  const addToDo = (todo) => {
    
    const newToDo = {id: uid++, text: todo };
    setTodos((prevState) => [...prevState, newToDo]);
    debugger;
  };

  const removeTodo = (id) => {
    const filterArr = todos.filter((input) => input.id !== id);
    setTodos( filterArr );
  };

  useEffect(() => {
    if(didMount.current){
      let count = todos.length;
      toast(`Remaining todos: ${count}`);
    } else {
      didMount.current = true 
    }
  });

  return (
    <section>
      <TodosForm addToDo={addToDo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
      <ToastContainer />
    </section>
  );
};



// class App extends React.Component {
//   state = { todos: []}

//   addToDo = (todo) => {

//     const newToDo = {id: uid++, text: todo}
//     this.setState((prevState) => ({
//       todos: [...prevState.todos, newToDo]
//     }))
//   }

//   removeTodo = (id) => {

//     const filterArr = this.state.todos.filter((input) => input.id !== id)
//     this.setState({todos: filterArr})
//   }

//   componentDidUpdate(){
//     const { todos } = this.state
//     let count = todos.length
//       toast(`Remaining todos: ${count}`)

// }

//   render() {
//     const { todos } = this.state
//     return (
//       <div className="app">
//         <TodosForm addToDo={this.addToDo} />
//         <TodoList todos={todos} removeTodo={this.removeTodo}/>
//         <ToastContainer />

//       </div>
//     );
//   }
// }

export default App;
