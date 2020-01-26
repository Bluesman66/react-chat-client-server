import React, { Component } from 'react';

export default class HocChild extends Component {
	render() {
		const { currency } = this.props;

		if (!Object.keys(currency).length) {
			return <div>LOADING...</div>	
		}

		return (
			<div>
				As of: {currency.date ? currency.date : '????'}
				<p>1 EUR = {currency.rates ? parseFloat(currency.rates['USD']).toFixed(2) : '????'} USD</p>
				<p>1 EUR = {currency.rates ? parseFloat(currency.rates['RUB']).toFixed(2) : '????'} RUB</p>
				<p>1 USD = {currency.rates ? (1 / parseFloat(currency.rates['USD']) * parseFloat(currency.rates['RUB'])).toFixed(2) : '????'} RUB</p>
			</div>
		)
	}
}