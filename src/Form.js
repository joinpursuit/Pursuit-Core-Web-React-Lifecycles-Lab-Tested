import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        const {dropDown, input} = this.props
        return (
            <div>
                <h2>Yesi's List</h2>
                <form action="" onSubmit={dropDown} value=''>
                    <input type="text" onChange={input} placeholder='Enter a Todo'/>
                </form>
            </div>
        )
    }
}
