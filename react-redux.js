import React from 'react';

import {StoreContext} from './store-context';

export class IProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: 'Intekhab'}
	}

	render() {
		return (
			<>
				<StoreContext.Provider value={this.props.store}>{this.props.children}</StoreContext.Provider>
			</>
		)
	}
}