var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors')

const db  = require('./utils/database')
const testDB = require('./utils/test-db')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const cardRouter_34 = require('./routes/card_34');
const card2Router_34 = require('./routes/card2_34');
const card2ApiRouter_34 = require('./routes/api/apiCard2Router_34');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/card_34', cardRouter_34);
app.use('/card2_34', card2Router_34);
app.use("/api/card2_34", card2ApiRouter_34);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;