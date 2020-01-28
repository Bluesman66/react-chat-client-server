export const connectedNewUser = (userId, userName) => {
	return {
		type: 'CONNECTED_NEW_USER',
		userId,
		userName
	}
}