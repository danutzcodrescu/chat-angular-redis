const express = require('express');
const router = express.Router();
const redis = require('../connection/redis');

router.post('/', function(req, res, next) {
	// const pub = redis.duplicate();
	// pub.publish("chat", JSON.stringify(req.body));
	// res.json('test');
});



module.exports = router;