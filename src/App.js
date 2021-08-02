import { React } from 'react';
import './App.css';
// import data from './components/data.js';
import NumberButton from './components/numberbutton';
import numbers from './numbers.js';
// import People from './components/people';

const App = () => <div className="App">
	{numbers.map(NumberButton)}
</div>;

export default App;
