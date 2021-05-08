import React from "react";
import { ToastContainer } from "react-toastify";
import ToDoList from "./Components/ToDoList"
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

const App =()=>{
  return (
    <div className="app">
    <ToDoList/>
    <ToastContainer className="success" />
    <ToastContainer className="error"/>
  </div>
  )
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="app">
//         <ToDoList/>
//         <ToastContainer className="Toastify__toast--success" />
//         <ToastContainer className="Toastify__toast--error"/>
//       </div>
//     );
//   }
// }

export default App;
