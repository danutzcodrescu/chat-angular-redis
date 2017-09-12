const redis = require("redis");

const client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

client.on("ready", function(){
	console.log("connected to redis");
})

module.exports = client;