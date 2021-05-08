import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import Form from './Components/Form';
import Todos from './Components/Todos';
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [list, setList] = useState([])

  const addToDo = (todo) => {
    setList((prevList) => ([...prevList, todo]))
	};

  const removeTodo = (name) => {
		const removeArr = list.filter((todo) => todo !== name);
    setList(removeArr)
  };

  useEffect(() => {
    toast(`Remaining todos: ${list.length}`);
  })
  
  
    return (
      <div className="app">
        <ToastContainer />
        <Form addToDo={addToDo}/>
        <ul id="todos">
					{list.map((todo) => (
						<Todos todo={todo} removeTodo={removeTodo} key={todo}/>
					))}
				</ul>
      </div>
    );
  }


export default App;
