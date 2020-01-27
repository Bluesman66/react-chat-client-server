import React, { Component } from 'react';
import hocLoader from './hoc-loader';

class HocChild extends Component {
	render() {
		const { currency } = this.props;

		return (
			<div>
				As of: {currency.date}
				<p>1 EUR = {parseFloat(currency.rates['USD']).toFixed(2)} USD</p>
				<p>1 EUR = {parseFloat(currency.rates['RUB']).toFixed(2)} RUB</p>
				<p>1 USD = {(1 / parseFloat(currency.rates['USD']) * parseFloat(currency.rates['RUB'])).toFixed(2)} RUB</p>
			</div>
		)
	}
}

export default hocLoader('currency')(HocChild);