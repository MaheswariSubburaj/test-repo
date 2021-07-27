/* eslint-disable max-lines-per-function */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import './App.scss';
import data from './components/data';
import People from './components/people';

const App = () => {
	// eslint-disable-next-line no-unused-vars
	const a = 0;
	const { people } = data;

	// eslint-disable-next-line no-console
	console.log(data);

	return <div className="App">
		{People(people)}
	</div>;
};

export default App;
