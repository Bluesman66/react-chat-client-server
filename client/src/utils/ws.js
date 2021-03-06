import { connectedNewUser, disconnectedUser, receiveNewMessage } from 'actions';
import store from 'store';

let ws, emit;

((wsUrl) => {
	const { dispatch } = store;

	ws = new WebSocket(wsUrl);

	ws.onopen = () => {
		console.log('WS Open!');
	}

	ws.onmessage = (msg) => {
		const msgObj = JSON.parse(msg.data);

		console.log('WS Message: ', msgObj);

		switch (msgObj.type) {
			case 'connected_new_user':
				dispatch(connectedNewUser(msgObj));
				break;
			case 'disconnected_user':
				dispatch(disconnectedUser(msgObj))
				break;
			case 'message':
				dispatch(receiveNewMessage(msgObj));
				break;
			default:
				break;
		}
	}

	let countReconnect = 0;
	emit = (message) => {
		if (countReconnect > 5) return;

		if (ws.readyState === ws.CONNECTING) {
			setTimeout(() => {
				emit(message);
				countReconnect++;
			}, 500);
			return;
		}
		ws.send(message);
		countReconnect = 0;
	}
})('ws://localhost:3000')

export default ws;
export {
	emit
}