import React, { Component } from 'react';

const hocLoader = (ChildComponent) => {
	return class hocLoader extends Component {

		propIsEmpty = () => {
			const { currency } = this.props;

			if (!Object.keys(currency).length) {
				return true;
			}
			return false;
		}

		loadComponent = () => {
			return <div>LOADING...</div>;
		}

		render() {
			return (
				this.propIsEmpty() ? this.loadComponent() : <ChildComponent {...this.props} />
			)
		}
	}
}

export default hocLoader;