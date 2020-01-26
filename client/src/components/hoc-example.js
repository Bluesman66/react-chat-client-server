import React, { Component } from 'react';
import HocChild from './hoc-child';

export default class HocExample extends Component {
	constructor() {
		super();
		this.state = { currency: {} };
	}

	componentWillMount() {
		setTimeout(() => {
			fetch('http://data.fixer.io/api/latest?access_key=c80c128ba8ef212bbec4f023d7420d36')
				.then(r => r.json())
				.then(data => {
					this.setState({ currency: data });
				})
		}, 2000);
	}

	render() {
		return (
			<div style={{ background: '#000', padding: 100 }}>
				<HocChild currency={this.state.currency} />
			</div>
		)
	}
}