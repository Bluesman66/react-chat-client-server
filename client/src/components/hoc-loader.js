import React, { Component } from 'react';
import progress from './../assets/images/progress.gif';

const hocLoader = (propName) => (loaderPath) => (ChildComponent) => {
	return class extends Component {

		componentDidMount = () => {
			this.startTime = Date.now();
		}

		componentWillReceiveProps = () => {
			this.endTime = Date.now();
		}

		propIsEmpty = () => {
			const prop = this.props[propName];

			if (!prop || (prop.hasOwnProperty('length') && !prop.length) || !Object.keys(prop).length) {
				return true;
			}
			return false;
		}

		getPreloader = () => {
			return loaderPath ? loaderPath : progress;
		}

		loadComponent = () => {
			return <div><img src={this.getPreloader()} alt="Loading..."></img> </div>;
		}

		render() {
			const loadTime = {
				diffTime: ((this.endTime - this.startTime) / 1000).toFixed(2)
			}

			return (
				this.propIsEmpty() ? this.loadComponent() : <ChildComponent {...this.props} {...loadTime} />
			)
		}
	}
}

export default hocLoader;