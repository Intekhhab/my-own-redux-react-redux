export const iCreateStore = (reducer) => {

	if (Object.prototype.toString.call(reducer) !== '[object Function]' )
			throw new Error('Reducer should a function not a '+ typeof reducer);

	let state;
	let listeners = [];

	const dispatch = (action) => {
		state = reducer(state, action);
		//console.log('Inside Store -- ', state);
		listeners.forEach(listener => {
			listener(state);
		});
	};

	const getState = () => {
		return state;
	};

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners.filter((l) => {
				return l !== listener;
			});
		}
	};

	dispatch({});

	return {
		getState,
		dispatch,
		subscribe
	}
};