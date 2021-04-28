import React from "react"
import uuid from "react-uuid"
// import { ToastContainer, toast } from "react-toastify";
// import "../../node_modules/react-toastify/dist/ReactToastify.css";
// toast.configure()

class TodoForm extends React.Component {
    state= {input:""}

    handleChange = (e) => {
        this.setState({input: e.target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {input} = this.state
        const newtodo = {id: uuid(), text: input}
        this.props.addTodo(newtodo)
        this.setState({input: ""})
    }


    render() {
        const {input} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label> 
                    <input placeholder="Enter a Todo" onChange={this.handleChange} type="text" value={input}/>
                </label>
            </form>
        )
    }
}



export default TodoForm;