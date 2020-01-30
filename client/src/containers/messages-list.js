import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChatHeader, ChatControl, MessageItem } from 'components';

class MessagesList extends Component {
	render() {
		return (
			<div class="chat">
				<ChatHeader />

				<div class="chat-history">
					<ul>
						{this.props.messages.map(msg => {
							return (
								<MessageItem key={msg.time} {...msg} />
							)
						})}
					</ul>
				</div>

				<ChatControl />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		messages: state.messagesReducer
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);