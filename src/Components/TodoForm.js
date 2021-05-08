import React, { useState } from "react";

export default function TodoForm({ addToDo }) {
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput((prevInput) => e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addToDo(input)
        setInput((prevInput) => "")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input value={input} onChange={handleChange} placeholder="Add a ToDo" />
            </label>
        </form>
    )
}
