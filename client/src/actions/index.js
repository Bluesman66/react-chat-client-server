import constants from 'constants';

export const connectedNewUser = (userId, userName) => {
	return {
		type: constants.CONNECTED_NEW_USER,
		userId,
		userName
	}
}

export const disconnectedUser = (userId) => {
	return {
		type: constants.DISCONNECTED_USER,
		userId
	}
}