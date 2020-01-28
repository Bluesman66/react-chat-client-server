import React, { Component } from 'react';
import ws, { emit } from 'utils';

const authHOC = (ChildComponent) => {
	return class extends Component {
		auth = () => {
			if (localStorage.getItem('auth', name)) {
				return true;
			}

			let name = prompt('Enter your name: ');

			if (!name || !name.trim().length) {
				return false;
			}

			localStorage.setItem('auth', name);
			emit(name);
			return true;
		}

		noName = () => {
			return (
				<div class='noname-wrap'>
					<p>You didn't enter the name:</p>
					<button onClick={() => { location.reload() }}>Try again?</button>
				</div>
			)
		}

		render() {
			return (
				this.auth() ? <ChildComponent {...this.props} /> : this.noName()
			)
		}
	}
}

export default authHOC;