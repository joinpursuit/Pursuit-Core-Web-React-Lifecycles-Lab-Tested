import React, { Component } from "react";

class Form extends Component {
	state = { input: "" };

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { input } = this.state;
		this.props.addToDo(input);
		this.setState({ input: "" });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleChange}
					name="input"
					value={this.state.input}
					placeholder="Enter To Do"
				/>
			</form>
		);
	}
}

export default Form;
