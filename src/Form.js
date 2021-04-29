import React, { Component } from 'react'

export class Form extends Component {
    render() {
        const {input, todoStateFunc} = this.props
        return (
            <div>
                <form  onSubmit={todoStateFunc}> 
                    <input onChange={input}>
                    </input>
                </form>
            </div>
        )
    }
}

export default Form