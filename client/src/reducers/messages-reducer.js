import constants from 'constants';

const messagesReducer = (state = [], action) => {
	console.log('message-reducer action: ', action);
	switch (action.type) {
		case constants.RECEIVE_NEW_MESSAGE:
			return state.concat({
				id: action.userId,
				text: action.textm,
				author: action.author,
				time: action.time
			});
		default:
			return state;
	}
}

export default messagesReducer;