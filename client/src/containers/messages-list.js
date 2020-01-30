import React, { Component } from 'react';
import { ChatHeader, ChatControl, MessageItem } from 'components';

export default class MessagesList extends Component {
	render() {
		return (
			<div class="chat">
				<ChatHeader />
				<div class="chat-history">
					<ul>
						<MessageItem />
					</ul>
				</div>

				<ChatControl />
			</div>
		)
	}
}