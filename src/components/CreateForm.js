import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
	state = {
		input: ''
	};

	handleChange = e => {
		const { value } = e.target;

		this.setState({
			input: value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onInsert(this.state.input);
		this.setState({
			input: ''
		});
	};

	render() {
		const { input } = this.state;
		return (
			<div className="CreateForm">
				<form className="form_container" onSubmit={this.handleSubmit}>
					<input
						value={input}
						placeholder="something to do?"
						onChange={this.handleChange}
					/>
					<button type="submit">추가</button>
				</form>
			</div>
		);
	}
}

export default CreateForm;
