import { React } from 'react';

const People = (people) => {
	// eslint-disable-next-line react/destructuring-assignment
	const count = people.length;

	return <div>
		people count:{count}
	</div>;
};

export default People;
