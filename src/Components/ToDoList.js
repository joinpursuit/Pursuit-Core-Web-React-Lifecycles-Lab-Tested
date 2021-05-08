import React, { useState } from "react";
import ToDo from "./ToDo";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

let id = 0
const ToDoList = () => {
  const [input, setInput] = useState("");
  const [listOfToDos, setListOfTodos] = useState([]);

  const handleSubmit = (e) => {
    // debugger
    e.preventDefault();
    setListOfTodos([...listOfToDos,input]);
    // toast.success(`New todo added: ${input}`)
    setInput("");
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setInput(value);
    // debugger
  };

  const handleDeleteListItem = (e) => {
    const { name } = e.target;
    // toast.error(`Todo deleted: ${name}`);

    setListOfTodos(
      listOfToDos.filter((todo) => {
        return todo !== name;
      })
    );
    // debugger
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInput} />
      </form>
      <ul id="todos">
      {listOfToDos.map((todo) => {
        return (
          <ToDo
            key={id + 1}
            todo={todo}
            handleDeleteListItem={handleDeleteListItem}
          />
        );
      })}
      </ul>
    </section>
  );
};

// class ToDoList extends React.Component {
//   state = { input: "", listOfToDos: [] };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState((prevState) => {
//       return { listOfToDos: [this.state.input, ...prevState.listOfToDos] };
//     });
//     this.setState({ input: "" });
//   };

//   handleInput = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleDeleteListItem = (e) => {
//     const { name } = e.target;
//     const { listOfToDos } = this.state;
//     this.setState({
//       listOfToDos: listOfToDos.filter((todo) => {
//         return todo !== name;
//       }),
//     });
//   };

//   render() {
//     const { input, listOfToDos} = this.state;
//     return (
//       <section>
//         <form onSubmit={this.handleSubmit}>
//           <input name="input" value={input} onChange={this.handleInput} />
//         </form>
//         {listOfToDos.map((todo) => {
//             return (
//               <ToDo
//                 key={todo}
//                 todo={todo}
//                 handleDeleteListItem={this.handleDeleteListItem}
//               />
//             );
//           })}

//       </section>
//     );
//   }
// }

export default ToDoList;
