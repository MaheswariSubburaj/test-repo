/* eslint-disable max-lines-per-function */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import './App.scss';

const App = () => {
	// eslint-disable-next-line no-unused-vars
	const a = 0;

	return <div style={ {
		height: '100px',
 		width: '100px',
		border: '2px solid black',

	} }
	       >
		<div style={ {
			height: '200px',
			width: '200px',
			border: '2px solid black',

		} }
		>
			<div style={ {
				height: '350px',
				width: '350px',
				border: '2px solid black',

			} }
			/>
		</div>
	</div>;
};

export default App;
