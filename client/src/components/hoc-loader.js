import React, { Component } from 'react';

const hocLoader = (propName) => (ChildComponent) => {
	return class extends Component {

		propIsEmpty = () => {
			const prop = this.props[propName];

			if (!prop || (prop.hasOwnProperty('length') && !prop.length) || !Object.keys(prop).length) {
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