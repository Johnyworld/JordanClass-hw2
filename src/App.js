import React, { Component } from 'react';
import './App.css';

import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h3>TODO LIST</h3>
				<CreateForm />
				<TodoList />
			</div>
		);
	}
}

export default App;
