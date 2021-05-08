import React, { useState } from "react";

const Todos = ({addToDo}) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
            e.preventDefault();
            addToDo(input)
            setInput("")
        }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          value={input}
          placeholder="Enter a Todo"
        />
      </form>
    </section>
  );
};

// class Todos extends React.Component{
//     state = { input: "" }

//     handleInput = (e) => {
//         this.setState({ input: e.target.value })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         const { addToDo } = this.props
//         addToDo(this.state.input)
//         this.setState({input: ""})

//     }
//     render(){
//         const { input } = this.state
//         return(
//             <section>
//                 <form onSubmit={this.handleSubmit}>
//                     <input onChange={this.handleInput} value={input} placeholder="Enter a Todo"/>
//                 </form>

//             </section>
//         )
//     }

// }

export default Todos;
