const client = require('./redis');

client.on('message', (channel, message)=>{
	console.log(channel, message);
});

client.subscribe("chat");

module.exports = client;