import React, { Component } from 'react';
import './App.css';

import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';

class App extends Component {
	id = 1;

	state = {
		todos: []
	};

	handleInsert = text => {
		const { todos } = this.state;
		this.setState({
			todos: todos.concat({
				id: this.id++,
				text,
				checked: false
			})
		});
	};

	handleToggle = id => {
		const { todos } = this.state;
		this.setState({
			todos: todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						checked: !todo.checked
					};
				}
				return todo;
			})
		});
	};

	handleRemove = id => {
		const { todos } = this.state;
		this.setState({
			todos: todos.filter(todo => todo.id !== id)
		});
	};

	render() {
		return (
			<div className="App">
				<h3>TODO LIST</h3>
				<CreateForm onInsert={this.handleInsert} />
				<TodoList
					todos={this.state.todos}
					onToggle={this.handleToggle}
					onRemove={this.handleRemove}
				/>
			</div>
		);
	}
}

export default App;
