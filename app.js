var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");

var index = require('./routes/index');
var users = require('./routes/users');

var login = require('./routes/login');
var home = require('./routes/home');
var company = require('./routes/company');
var job = require('./routes/job');
var job_resume = require('./routes/job_resume');
var deliver = require('./routes/deliver');
var collect = require('./routes/collect');
var companyForUser = require('./routes/companyForUser');
var search = require('./routes/search');


var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); //为了跨域保持session，所以指定地址，不能用*
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header('Access-Control-Allow-Credentials', true);
    if(req.method==="OPTIONS") {
        res.send(200);/*让options请求快速返回*/
    }
    else  {
        next();
    }
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.use(bodyParser.json());
app.use(bodyParser.json({limit : "1000kb"}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: '12345',//与cookieParser中的一致
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
    resave: false,
    saveUninitialized:true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use('/login', login);
app.use('/home', home);
app.use('/company', company);
app.use('/job', job);
app.use('/job_resume', job_resume);
app.use('/deliver', deliver);
app.use('/collect', collect);
app.use('/companyForUser', companyForUser);
app.use('/search', search);


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

module.exports = app;
