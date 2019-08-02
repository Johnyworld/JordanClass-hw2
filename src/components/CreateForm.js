import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
	render() {
		return (
			<div className="CreateForm">
				<form className="form_container">
					<input placeholder="something to do?" />
					<button>추가</button>
				</form>
			</div>
		);
	}
}

export default CreateForm;
