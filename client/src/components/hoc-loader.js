import React, { Component } from 'react';
import progress from './../assets/images/progress.gif';

const hocLoader = (propName) => (loaderPath) => (ChildComponent) => {
	return class extends Component {

		propIsEmpty = () => {
			const prop = this.props[propName];

			if (!prop || (prop.hasOwnProperty('length') && !prop.length) || !Object.keys(prop).length) {
				return true;
			}
			return false;
		}

		getPreloader = () => {
			return !loaderPath ? progress : loaderPath; 
		}

		loadComponent = () => {
			return <div><img src={this.getPreloader()} alt="Loading..."></img> </div>;
		}

		render() {
			return (
				this.propIsEmpty() ? this.loadComponent() : <ChildComponent {...this.props} />
			)
		}
	}
}

export default hocLoader;