import { React } from 'react';
import './App.css';
import NumberButton from './components/numberbutton';
import numbers from './numbers.js';
import context from './core/context.js';

const App = () => {
	// eslint-disable-next-line no-console
	console.log(context.state);

	return <div className="App">
		{numbers.map(NumberButton)}
	</div>;
};

export default App;
