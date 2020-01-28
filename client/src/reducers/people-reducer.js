const peopleReducer = (state = [], action) => {
	if (action.type === 'CONNECTED_NEW_USER') {
		return state.concat({
			id: action.userId,
			userName: action.userName
		});
	}

	return state;
}

export default peopleReducer;