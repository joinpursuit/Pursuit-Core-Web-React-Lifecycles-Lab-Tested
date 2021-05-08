import React, { Component } from "react";

export default class TodoForm extends Component {
	state = { userInput: "" };
    handleSubmit = (e) => {
        e.preventDefault();
        const { userInput } = this.state;
        this.props.addToDo(userInput);
        this.setState({ userInput: "" });
    };
	handleChange = (e) => {
		this.setState({ userInput: e.target.value });
	};


	render() {
        const {userInput} = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleChange}
					value={userInput}
					placeholder="Enter a Todo"
				/>
			</form>
		);
	}
}