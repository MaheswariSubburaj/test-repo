import { React } from 'react';
import './App.css';
import numbers from './numbers.js';
import context from './core/context.js';
import symbols from './symbols';
import SymbolButton from './components/symbolbutton';
import NumberButtonRow from './components/numberbuttonrow';

const App = () =>
// eslint-disable-next-line no-console
// console.log(context.state);

	<div className="App">
		<div>{numbers.map((number) => number.map(NumberButtonRow))}</div>
		<div>{symbols.map(SymbolButton)}</div>
		<div>{context.state.count}</div>
		<div>{context.state.num}</div>
	</div>;

export default App;
