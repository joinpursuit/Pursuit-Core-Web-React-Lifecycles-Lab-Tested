import React from 'react'

export default function Form(props) {
    return <form onsubmit={props.handleItem}>
            <input 
            type='text'
            id = 'todo'
            value={props.todo}
            onChange={props.handleInput}
            />
            </form>
    
}
