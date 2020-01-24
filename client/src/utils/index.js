let ws;

((wsUrl) => {
	ws = new WebSocket(wsUrl);

	ws.onopen = () => {
		console.log('WS Open!');
	}

	ws.onmessage = (msg) => {
		console.log(msg.data);
	}
})('ws://localhost:3000')

export default ws;