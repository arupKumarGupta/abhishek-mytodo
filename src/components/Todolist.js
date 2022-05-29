import React, { Component } from 'react';
import Todo from './Todo';

export default class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: props.todos,
		};
	}

	render() {
		return (
			<div>
				{this.state.todos.map((todo, indx) => (
					<Todo todo={todo} key={indx} onClick={this.toggleTodo} />
				))}
			</div>
		);
	}

	toggleTodo = (id) => {
		let updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	};
}
