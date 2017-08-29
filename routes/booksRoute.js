const express = require('express');
const router = express.Router();
const request = require('request-promise-native');
const { promisify } = require('util');
const { parseString } = require('xml2js');
const promiseParseXML = promisify(parseString);

router.get('/goodreads', function(req, res, next) {
	const options = {
		uri: 'https://www.goodreads.com/search.xml',
		qs: {
			key: process.env.GOODREADS_KEY,
			q: req.query.search
		}
	};
	request(options)
    .then(xml => promiseParseXML(xml))
	.then(response=>{
		res.json(response.GoodreadsResponse.search[0].results);
	})
    .catch(function (err) {
		console.log(err);
		res.json(err);
	});
})

router.get('/gbooks', async function(req, res, next) {
	const options = {
		uri: 'https://www.googleapis.com/books/v1/volumes',
		qs: {
			key: process.env.GOOGLE_BOOKS_API,
			q: req.query.search,
			langRestrict:"en",
			printType:"books",
			maxResults:10
		}
	};
	try {
		const books = JSON.parse(await request(options));
		const regex = new RegExp(req.query.search, 'gi')
		const filteredBooks = books.items.filter(book=>{
			console.log(book.volumeInfo)
			return (book.volumeInfo.title && book.volumeInfo.title.match(regex)) || (book.volumeInfo.authors && book.volumeInfo.authors.some(author=>author.match(regex))) 
		});
		res.json(filteredBooks)
	}
	catch(e) {next(e)}
	
});

module.exports = router;