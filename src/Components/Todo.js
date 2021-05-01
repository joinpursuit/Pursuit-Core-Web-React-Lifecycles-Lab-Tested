import React from 'react'
import "./Todo.css"

export default function Todo(props) {
    return (
        <div className="Todo">
            <form onSubmit={props.addTOdo}>
                    <input name= 'inputUser'
                           value={props.inputUser}
                           type='text' 
                           onChange={props.handleBTN} 
                           placeholder="Enter a todo"/>
                </form>
        </div>
    )
}
