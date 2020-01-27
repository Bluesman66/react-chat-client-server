import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ChatWrapper from './chat-wrapper';
import store from 'store';

window.store = store;
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div class="container clearfix">
					<ChatWrapper />
				</div>
			</Provider>
		);
	}
}

export default hot(App);
