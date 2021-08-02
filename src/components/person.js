import { React } from 'react';

const Person = (person) => {
	const { name } = person;
	const { age } = person;
	const { color } = person;

	return <div>
		<div style={ {
			background: color,
		} }
		>Hello! {name}, your age {age}</div>
	</div>;
};

export default Person;
