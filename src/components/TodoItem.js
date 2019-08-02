import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
	render() {
		return (
			<div className="TodoItem">
				<div className="check">&#10004;</div>
				<div className="remove">[지우기]</div>
				<div className="text">[제목]</div>
			</div>
		);
	}
}

export default TodoItem;
