import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
	render() {
		const { todos, onToggle, onRemove } = this.props;

		return (
			<div className="TodoList">
				{todos.map(todo => {
					return (
						<TodoItem
							todo={todo}
							onToggle={onToggle}
							onRemove={onRemove}
						/>
					);
				})}
			</div>
		);
	}
}

export default TodoList;
