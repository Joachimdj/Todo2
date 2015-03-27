var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var routes = require('./routes/index');
var person = require('./routes/person');
var todo = require('./routes/todo');
var users = require('./Models/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'secret_3162735',saveUninitialized:true, resave: true}));
app.use(function (req, res, next) {
    console.log("start login check");
    var userName = req.session.userName;
    var passWord = req.session.passWord;
    if(typeof(userName) === "undefined" || typeof(passWord) === "undefined") {
        userName =  req.body.userName;
        passWord = req.body.passWord;

        if (typeof(userName) !== "undefined" || typeof(passWord) !== "undefined") {

            //check if username and password are correct.
            console.log("prøver login");
            if(users.findUsers(userName,passWord)){
                console.log("logger ind");
                req.session.userName = userName;
                req.session.passWord = passWord;
                req.url = "/";
                req.method = 'get';
                next();

            }


        }
        else {
            req.url = "/login";
            next();
        }
        console.log("not logged in");
        req.url = "/login";
        req.method = 'get';
        next();
    }
    else
    {return next();}


});


app.use('/', routes);
app.use('/todo', todo);
app.use('/person', person);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
