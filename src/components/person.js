import { React } from 'react';
import People from './people';
import Person from './person';

const People = (People) => {
	const count = people.length;
	return <div>
	<div>{people.map(Person)}</div>
	<div> People count : {count} </div>
	</div>;
};

export default People;
