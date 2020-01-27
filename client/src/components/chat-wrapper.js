import React, { Component } from 'react'
import { PeopleList, MessagesList } from 'containers';

export default class ChatWrapper extends Component {
	render() {
		return (
			<div>
				<PeopleList />
				<MessagesList />
			</div>
		)
	}
}

