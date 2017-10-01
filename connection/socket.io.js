const socketIo = (socket) => {
	console.log('a user connected');
	
	// receive from client (index.ejs) with socket.on
	socket.on('message', function(msg){
		  console.log('new message: ' + JSON.stringify(msg));
		  // send to client (index.ejs) with app.io.emit
		  // here it reacts direct after receiving a message from the client
	});
}

module.exports = socketIo;