import React from 'react';

import {StoreContext} from './store-context';

export function iConnect(mapStateToProp) {

	return (Comp) => {
		let prevProps, newProps;
		class Temp extends React.Component {

			componentDidMount() {
				let store = this.context;
				let self = this;
				store.subscribe(() => {
					let newProps = mapStateToProp(store.getState());
					if (true) //Check if required props are changed
						self.forceUpdate();
					prevProps = newProps;
				});
			}

			render() {
				let store = this.context;
				let props = mapStateToProp(store.getState());
				props.dispatch = store.dispatch;

				//console.log(props);

				return <Comp {...props}/>
			}
		}
		Temp.contextType = StoreContext;
		return Temp;
	}
}