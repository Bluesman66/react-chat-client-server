import constants from 'constants';

const peopleReducer = (state = [], action) => {
	if (action.type === constants.CONNECTED_NEW_USER) {
		return state.concat({
			id: action.userId,
			userName: action.userName
		});
	}

	return state;
}

export default peopleReducer;