var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const booksRoute = require('./routes/booksRoute');
const usersRoute = require('./routes/usersRoute');
const socketIo = require('./connection/socket.io');
// const chatRoute = require('./routes/chatRoute');

require('dotenv').config({path: './variables.env'});

var app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

// app.io = require('socket.io')();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Type');
    // res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

//start listen with socket.io
io.on('connection', socketIo);


app.use('/books', booksRoute);
app.use('/users', usersRoute);
// app.use('/chat', chatRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports ={app, server};;
