import { React } from 'react';
import './App.css';
import TextBox from './components/input';
import context from './core/context.js';

const App = () => <div className="App">
	<div>Score: {context.state.score}</div>
	<div> {context.state.question} </div>
	<div>{ TextBox() } </div>
</div>;

export default App;
