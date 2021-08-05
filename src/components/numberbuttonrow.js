import { React } from 'react';
import context from '../core/context';

const NumberButtonRow = (number) => <div>
	<button
		onClick={ () => {
			context.actions.increaseCount(number);
			context.actions.setCount(number);
		} }
	>{number} </button>
</div>;

export default NumberButtonRow;
