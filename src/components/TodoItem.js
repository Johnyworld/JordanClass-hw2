import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.todo !== nextProps.todo;
	}

	render() {
		const { todo, onToggle, onRemove } = this.props;
		return (
			<div
				className={`TodoItem ${todo.checked && 'active'}`}
				onClick={() => onToggle(todo.id)}
			>
				<div className="check">&#10004;</div>
				<div
					className="remove"
					onClick={e => {
						e.stopPropagation();
						onRemove(todo.id);
					}}
				>
					[지우기]
				</div>
				<div className="text">{todo.text}</div>
			</div>
		);
	}
}

export default TodoItem;
