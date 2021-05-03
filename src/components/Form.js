import React, { Component } from 'react'

export default class Form extends Component {



    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} action="">
                    <input onInput={this.props.handleInput} type="text" name="" id=""/>
                </form>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            input: ''
        })
    }
}
