import React from 'react'

export default function Form(props) {
    return <form onSubmit={props.handleItem}>
            <input 
            type='text'
            name='todo'
            id = 'todo'
            value={props.todo}
            onChange={props.handleInput}
            />
            </form>
    
}
