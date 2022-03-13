var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const { title } = require('process');

/*var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'dfgdgdfgdfgdf',
  resave:false,
  saveUninitialized: true
}))

/*app.use('/', indexRouter);
app.use('/users', usersRouter);*/

app.use( function(req,res,next){
  if(!req.session.vistas){
    req.session.vistas={}
  }

  if(!req.session.vistas[req.Url]){
    req.session.vistas[req.Url]=1;
  } else{
    req.session.vistas[req.Url]++;
  }
  console.log(req.session.vistas[req.Url])
  next();
});

app.get('/pag', function(req,res){
  res.render('pag',{
    title: 'Pagina contadora',
    nombre:'pag',
    vistas: req.session.vistas[req.Url]
  })
});

app.get('/', function(req, res){ 
  res. redirect('/pag');
});



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
