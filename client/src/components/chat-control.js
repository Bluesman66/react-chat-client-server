import React, { Component } from 'react'

export default class ChatControl extends Component {
	render() {
		return (
			<div class="chat-message clearfix">
				<textarea placeholder="Type your message" rows="4"></textarea>
				<button>Send</button>
			</div>
		)
	}
}
