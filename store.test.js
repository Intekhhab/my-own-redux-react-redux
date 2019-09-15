const reducer = (state = 0, action) => {
	switch(action.type) {

		case "INCREMENT":
			return ++state;

		case "DECREMENT":
			return --state;


		default:
			return state;
	}
};

const store = createStore(reducer);

const render = () => {
	document.body.innerText = store.getState();
};

store.subscribe(render);