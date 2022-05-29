import { Component } from 'react';
import './App.css';
import Todolist from './components/Todolist';
import todos from './todos.json';
class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Todolist todos={todos} />;
	}
}
export default App;
