let ws, emit;

((wsUrl) => {
	ws = new WebSocket(wsUrl);

	ws.onopen = () => {
		console.log('WS Open!');
	}

	ws.onmessage = (msg) => {
		console.log(msg.data);
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