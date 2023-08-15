// eslint-disable-next-line
module.exports = {
	'*.{js?(x), ts?(x)}': ['npm run lint:fix'],
	'*.{ts?(x)}': [() => 'npm run tsc:check'],
};
