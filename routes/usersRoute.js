const express = require('express');
const router = express.Router();
const redis = require('../connection/redis');
const User = require('../models/UseModel');

router.post('/register', function(req, res, next) {
	redis.hmset(`user:${req.body.username}`, ["username", req.body.username, "password", req.body.password], (err, user)=>{
		if (err) console.log(err);
		res.json(user);
	});
});

router.post('/login', function(req, res, next) {
	redis.hmget(`user:${req.body.username}`, 'username', 'password', (err, resp)=>{
		if (err) console.log(err);
		const user = new User(...resp);
		if (user.getPassword()==req.body.password) {
			res.json(user.api());
		} else {
			res.status(500).end();
		}
		
	});
});

module.exports = router;