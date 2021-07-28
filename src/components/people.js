import { React } from 'react';

const People = (people) => {
	// eslint-disable-next-line react/destructuring-assignment
	const { count } = people.length;
	const { name } = people;
	const { age } = people;
	const { color } = people;

	return <div>
		<div>
			people count:{count}
		</div>
		style = { {
			backgroundcolor: color,
		}}
		Hello! {name}, your age {age}
	</div>;
};

export default People;
