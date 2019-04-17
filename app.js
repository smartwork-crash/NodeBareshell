const express = require('express');
const app = express();
var expressValidator = require('express-validator');
var cors = require('cors');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cors());
app.options('*', cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: false,
    resave: false
}));
app.get('/',(req,res)=>{
	req.session.id='1';
});


app.use(cookieParser());



// Passport
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg    : msg,
      value : value
    };
  }
}));

// view engine setup

 var hbs = exphbs.create({
 //Specify helpers which are only registered on this instance.
     helpers: {
        foo: function () { return 'FOO!'; },
         bar: function () { return 'BAR!'; }
     }
 });

app.engine('handlebars', hbs.engine);
 app.set('view engine', 'handlebars');

 
const plan = require('./api/routes/pronouncements');
app.use('/pronouncements',plan);


const drug = require('./api/routes/getdrugs');
app.use('/drugs',drug);



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