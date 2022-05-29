import React, { Component } from 'react';

export default class Todo extends Component {
	render() {
		const { todo } = this.props;
		return (
			<div
				onClick={() => {
					this.props.onClick(todo.id);
				}}
			>
				{todo.desc} {todo.isComplete + ''}
			</div>
		);
	}
}
