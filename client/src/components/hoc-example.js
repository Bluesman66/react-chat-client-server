import React, { Component } from 'react';

export default class HocExample extends Component {
	componentWillMount() {
		fetch('http://data.fixer.io/api/latest?access_key=c80c128ba8ef212bbec4f023d7420d36')
			.then(r => r.json())
			.then(data => {
				this.setState({ currency: data });
			})
	}

	render () {
		return (
			<div style={{ background: '#000', padding: 100 }}>HOC Example</div>
		)
	}
}