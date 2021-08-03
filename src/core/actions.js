const setCount = ({ data }) => ({
	count: data * data,
});
const increaseCount = ({ data }) => ({
	num: data,
});
const actions = {
	setCount,
	increaseCount,
};

export default actions;
