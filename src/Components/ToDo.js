import React from "react";

class ToDo extends React.Component{
    
    render(){
        console.log(this.props)
        return (
            <div>
                {/* <ul>
                {this.props.list((todo)=>{
                    return <li key={todo.id} >
                        {todo.type}

                    </li>
                })}
                </ul> */}
            </div>

        )
    }
}

export default ToDo;