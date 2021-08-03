import { React } from 'react';
import './App.css';
import NumberButton from './components/numberbutton';
import numbers from './numbers.js';
import context from './core/context.js';
import symbols from './symbols';
import SymbolButton from './components/symbolbutton';

const App = () => {
	// eslint-disable-next-line no-console
	console.log(context.state);

	return <div className="App">
		<div>{numbers.map(NumberButton)}</div>
		<div>{symbols.map(SymbolButton)}</div>
	</div>;
};

export default App;
