import React from "react"
import uuid from "react-uuid"

class TodoForm extends React.Component{
    state = {input: ""}

    handleInput = (e) => {
        this.setState({input: e.target.value})
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        const {addToDo} = this.props
        const newToDo = {id: uuid(), text: this.state.input, completed: false}
        addToDo(newToDo)
        this.setState({input: ""})
    }

    render(){
        const { input } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="text-input">Add To Do: </label>
                <input onChange={this.handleInput} id="text-input" type="text" value={input}/>
            </form>
        )
    }
}

export default TodoForm;