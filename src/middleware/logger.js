const logger = (store) => (next) => (action) => {
	console.group(action.type);
		console.log('The action: ', action);
		const returnedValue = next(action);
		console.log('The new state: ', store.getState());
		console.log('Total number of tweets: ', Object.keys(store.getState().tweets).length);
	console.groupEnd();
	
	return returnedValue;
}

export default logger;