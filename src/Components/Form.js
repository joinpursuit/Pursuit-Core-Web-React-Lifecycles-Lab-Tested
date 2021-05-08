import React, { useState } from 'react';

const Form = ({addToDo}) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => { 
        e.preventDefault();
        addToDo(input);
        setInput('')

    }

    const handleInput = (e) => [
        setInput(e.target.value)
    ]
    
        return (
            <form onSubmit={handleSubmit}>
            <input name='input' value={input} placeholder='Enter a ToDo' onChange={handleInput} />
            </form>
        )
    
}

export default Form;