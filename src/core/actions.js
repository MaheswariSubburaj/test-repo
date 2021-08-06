const setCount = ({ data }) => ({
	count: data,
});
const setInput = ({ data }) => ({
	setInput: data,
});
const actions = {
	setCount,
	setInput,
};

export default actions;
