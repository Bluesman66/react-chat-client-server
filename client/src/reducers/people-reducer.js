import constants from 'constants';

const peopleReducer = (state = [], action) => {
	switch (action.type) {
		case constants.CONNECTED_NEW_USER:
			return state.concat({ ...action });
		case constants.DISCONNECTED_USER:
			return state.filter(user => {
				return user.id !== action.userId;
			})
		default:
			return state;
	}
}

export default peopleReducer;