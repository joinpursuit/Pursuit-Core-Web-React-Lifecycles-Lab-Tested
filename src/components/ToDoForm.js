import React, { useState } from 'react'
import uuid from 'react-uuid'

const ToDoForm = ({addToDo}) => {
 const [ Todo, setTodo] = useState([])

 
 const handleInputChange = (e) => {
     setTodo(e.target.value)
 }
 

 const handleSubmit = (e) => {
     e.preventDefault();
     const newToDo = {id: uuid(), text: Todo}
     addToDo(newToDo);
     setTodo("")
 }

 return (
    <div>
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
        <label htmlFor="itemInput"></label>
        <input  onChange={handleInputChange} id="itemInput" placeholder="Enter a Todo" value={Todo} />
    </form>
    </div>
)

}



// class ToDoForm extends React.Component {
//     state = { Todo: ""}

//     handleInputChange = (e) => {
//         this.setState({Todo: e.target.value})
//     }


//     handleSubmit = (e) => {
//         e.preventDefault();
//         const { addToDo } = this.props;
//         const newToDo = {id: uuid(), text: this.state.Todo}
//         addToDo(newToDo);
//         this.setState({Todo: ""})
//     }


//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <br></br>
//                 <form onSubmit={this.handleSubmit}>
//                 <label htmlFor="itemInput"></label>
//                 <input  onChange={this.handleInputChange} id="itemInput" placeholder="Enter a Todo" value={this.state.Todo} />
//             </form>
//             </div>
//         )
//     }
// }

export default ToDoForm; 