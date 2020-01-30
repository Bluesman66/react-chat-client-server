import React, { Component } from 'react'

export default class ChatHeader extends Component {
	render() {
		return (
			<div class="chat-header clearfix">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

				<div class="chat-about">
					<div class="chat-with">Main Chat</div>
				</div>
				<i class="fa fa-star" />
			</div>
		)
	}
}