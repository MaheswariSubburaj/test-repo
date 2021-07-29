import { React } from 'react';

const People = (people) => {
	const { name } = people;
	const { age } = people;
	const { color } = people;

	return <div>
		<div style={ {
			background: color,
		} }
		>Hello! {name}, your age {age}</div>
	</div>;
};

export default People;
