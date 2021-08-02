/* eslint-disable react/destructuring-assignment */
import { React } from 'react';
import Person from './person';

const People = (people) => {
	// eslint-disable-next-line react/destructuring-assignment
	const count = people.length;

	return <div>
		<div>{ people.map(Person) }</div>
		<div> People count : {count} </div>
	</div>;
};

export default People;
