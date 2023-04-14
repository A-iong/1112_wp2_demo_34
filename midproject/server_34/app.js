var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const db = require('./utils/database');
// const testDB = require('./utils/test-db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const cardRouter_xx = require('./routes/card_xx');
const card2Router_xx = require('./routes/card2_xx');

const card2ApiRouter_xx = require('./routes/api/apiCard2Router_xx');

const midprepRouter_xx = require('./routes/midprep_34');

const apiMidprepRouter_34 = require('./routes/api/apiMidprepRouter_34');

const apiMiddleProject_34 = require('./routes/api/apiMiddleProject_34');

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

app.use('/card_xx', cardRouter_xx);
app.use('/card2_xx', card2Router_xx);

app.use('/api/card2_xx', card2ApiRouter_xx);

// const testDB = require('./utils/midprep_test_34');
// console.log(testDB)

const testDB = require('./utils/middle_project_test_34');
console.log(testDB)

app.use('/midprep_34', midprepRouter_xx);
app.use('/api/midprep_34', apiMidprepRouter_34);
app.use('/api/middle_project', apiMiddleProject_34);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
