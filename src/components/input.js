import { React } from 'react';
import context from '../core/context.js';

const TextBox = () =>
	<input
		value={ context.state.answer }
		onChange={ (evt) => {
			context.actions.setInput(evt.target.value);
		} }
	/>;

export default TextBox;
