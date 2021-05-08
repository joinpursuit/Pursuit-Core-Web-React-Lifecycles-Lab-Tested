import React, { useState } from "react";

const TodoForm = ({addToDo}) => {
	const [userInput, setUserInput] = useState('');

	const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(userInput);
        setUserInput("");
    };
	const handleChange = (e) => {
		setUserInput(e.target.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				value={userInput}
				placeholder="Enter a Todo"
			/>
		</form>
	);
}

export default TodoForm;

// export default class TodoForm extends React.Component {
// 	state = { userInput: "" };
//     handleSubmit = (e) => {
//         e.preventDefault();
//         const { userInput } = this.state;
//         this.props.addToDo(userInput);
//         this.setState({ userInput: "" });
//     };
// 	handleChange = (e) => {
// 		this.setState({ userInput: e.target.value });
// 	};


// 	render() {
//         const {userInput} = this.state
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<input
// 					onChange={this.handleChange}
// 					value={userInput}
// 					placeholder="Enter a Todo"
// 				/>
// 			</form>
// 		);
// 	}
// }