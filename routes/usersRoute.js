const express = require('express');
const router = express.Router();
const redis = require('../connection/redis');
const User = require('../models/UseModel');

router.post('/register', function(req, res, next) {
	redis.hmset(`user:${req.body.username}`, ["username", req.body.username, "password", req.body.password], (err, user)=>{
		if (err) next(err);
		res.json(user);
	});
});

router.post('/login', function(req, res, next) {
	redis.multi()
	.smembers(`user:${req.body.username}:friends`)
	.hmget(`user:${req.body.username}`, 'username', 'password')
	.smembers(`user:${req.body.username}:conversations`)
    .exec(function (err, replies) {
		if (err) next(err);
		if (replies[1][0]===null) res.status(404).end();
		const user = new User(...replies[1], replies[0]);
		if (user.getPassword()==req.body.password) {
			const multi = redis.multi();
			replies[2].forEach(id => {
				multi.hgetall(`conversation:${id}`);
			});
			multi.exec(function (err, conversations) {
				user.conversations = conversations;
				res.json(user.api()); // 101, 2
			});
			
		} else {
			res.status(404).end();
		}
    });

});

module.exports = router;