// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "../node_modules/react-toastify/dist/ReactToastify.css";
// import "./App.css";
// import ToDoForm from "./components/ToDoForm";
// import ToDoList from "./components/ToDoList";

// class  extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       toDos: [],
//       input: "",
//     };
//   }
//   // componentDidUpdate(){
//   //  console.log('updates are working')
//   //  //or should i toast here in a conditional?
//   //  }
//   addToDo() {
//     const input = this.state.input
//     const toDos  = [...this.state.toDos, input];
//     this.setState({toDos});
//     // toast(`New todo created:`);
//   }
//   removeToDo(idx) {
//     const toDos = [...this.state.toDos];
//     toDos.splice(idx, 1);
//     this.setState({toDos});
//     // toast(`Todo deleted:`);
//   }
//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };
//   // handleSubmit = (e) => {
//   //   e.preventDefault();
//   // }

//   render() {
//     const { toDos, input } = this.state;
//     const ToDos = toDos.map((todo, i) => {
//       return (
//         <ToDoForm
//           key={i}
//           todo={todo}
//           addToDo={this.addToDo}
//           removeToDo={this.removeToDo}
//           handleChange={this.handleChange}
//         />
//       );
//     });

//     return (
//       <div className="app">
//         <ToastContainer />
//         <h1>To Do</h1>
//         Give me something to do?!
//         {ToDos}
//         <ToDoList toDos={toDos}/>
//       </div>
//     );
//   }
// }
