import React from 'react';

const Form = ({ handleSubmit, handleChange }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' placeholder="Just do it, like Nike" />
            </form>
        </div>
    )

}


export default Form;