import React, {useState, useEffect} from "react";
import ToDoForm from './Components/ToDoForm'
import ToDoList from './Components/ToDoList'
import { ToastContainer, toast } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [toDos, setToDos] = useState([])
  // const [count, setCount] = useState(0)
  // const [toDo] = useState("")
  // const [filterArr] = useState([])

  const addToDo = (toDo) => {
    setToDos((prevToDos) => {
      return [...prevToDos, toDo]} )
  }


    const removeToDos = (id) => {
      const filterArr = toDos.filter((toDo) => toDo.id !== id)
      setToDos(filterArr)
    }
    
    useEffect(() => {
      let count = toDos.length;
        toast(`Remaining todos: ${count}`)
      return () => {     
      }
    }, [])

    return (
      <div className="app">
        <br></br>
        <br></br>
        <ToDoForm addToDo={addToDo} ToastContainer={ToastContainer} toast={toast}/>
        <ToDoList toDos={toDos} removeToDos={removeToDos} toast={toast}/>
        <ToastContainer />
      </div>
    );

  }
// class App extends React.Component {
  // state = { toDos: []}



  // addToDo = (toDo) => {
  //   this.setState((prevState) => ({toDos: [...prevState.toDos, toDo]}))
  // }

  // removeToDos = (id) => {
  //   const filterArr = this.state.toDos.filter((toDo) => toDo.id !== id)
  //   this.setState({toDos: filterArr})
  // }
  


// componentDidUpdate(prevState) {
//     let count = this.state.toDos.length;
//     toast(`Remaining todos: ${count}`)
//   } 

//   render() {
//     const { toDos } = this.state;
//     return (
//       <div className="app">
//         <br></br>
//         <br></br>
//         <ToDoForm addToDo={addToDo} ToastContainer={ToastContainer} toast={toast}/>
//         <ToDoList toDos={toDos} removeToDos={removeToDos} toast={toast}/>
//         <ToastContainer />
//       </div>
//     );
//   }
// }

export default App;
