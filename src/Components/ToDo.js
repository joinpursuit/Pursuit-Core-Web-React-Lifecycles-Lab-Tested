import React from "react"

class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = {enterToDo: ""}
    }

    handleSubmit = (e) =>{
        e.preventDefault()
    }


    handleChange = (e) =>{
        this.setState({enterToDo: e.target.value})
    }



    componentDidMount(){

    }

    componentDidUpdate(){

    }


    render(){
        const {enterToDo}=this.state
        return(
            <div>
                <h1>ToDo</h1>
            <form onSubmit={this.handleSubmit}>

                <input onChange={this.handleChange} id="#todos" name="enterToDo" type="text" value={this.state.enterToDo}/>
                <ul>
                    {enterToDo}
                </ul>

            </form>

            </div>
        )
    }
}

export default ToDo