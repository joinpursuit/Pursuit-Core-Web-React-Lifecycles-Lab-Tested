import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import Todo from './Todo';
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

  const Form = ({addToDo}) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => { 
        e.preventDefault();
        addToDo(input);
        setInput('')

    }

    const handleInput = (e) => [
        setInput(e.target.value)
    ]
    
        return (
            <form onSubmit={handleSubmit}>
            <input name='input' value={input} placeholder='Enter a ToDo' onChange={handleInput} />
            </form>
        )
    
}
  
    return (
      <div className="app">
        <ToastContainer />
        <Form addToDo={addToDo}/>
        <ul id="todos">
					{list.map((todo) => (
						<Todo todo={todo} removeTodo={removeTodo} key={todo}/>
					))}
				</ul>
      </div>
    );
  }


export default App;
