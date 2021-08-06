import { React } from 'react';
import './App.css';
import TextBox from './components/input';
import context from './core/context.js';

const App = () => {
	// eslint-disable-next-line no-console
	console.log(context.state);

	return	<div className="input">{ TextBox() } </div>;
};

export default App;
