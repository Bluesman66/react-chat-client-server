import React, { Component } from 'react'
import { PeopleList, MessagesList } from 'containers';
import authHOC from './authHOC';

class ChatWrapper extends Component {
	render() {
		return (
			<div>
				<PeopleList />
				<MessagesList />
			</div>
		)
	}
}

export default authHOC(ChatWrapper);