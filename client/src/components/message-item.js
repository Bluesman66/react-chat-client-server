import React, { Component } from 'react'

export default class MessageItem extends Component {
	render() {
		const { author, text, color } = this.props;
		return (
			<li class="clearfix">
				<div class="message-data align-right">
					<span class="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
					<span class="message-data-name" >{author}</span> <i class="fa fa-circle me"></i>
				</div>
				<div style={{ background: color }} class="message other-message float-right">
					{text}
				</div>
			</li>
		)
	}
}
