/*
Name: Gian Desiderio
Student id: 301296686
Date: 10-06-2023
*/
// installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let app = express();
let mongoose = require('mongoose');
let DB = require('./db');

// MONGODB Compass
/*
//point to your DB, URI
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console,'Error in Connection'));
mongoDB.once('open', ()=> {
  console.log('Connected with MongoDB......Success!!');
});
*/

/*
// connect to mongodb ATLAS
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://leoge120:kawasaki123456@gpcdmongodbserver.zlzsnom.mongodb.net/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongo() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
    } catch (err) {
        console.error(err);
    }
}

connectToMongo();


mongoose.connect('mongodb+srv://leoge120:kawasaki123456@gpcdmongodbserver.zlzsnom.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
*/


// connecto mongo COMPASS

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/Products";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongo() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
    } catch (err) {
        console.error(err);
    }
}

connectToMongo();


mongoose.connect('mongodb://127.0.0.1:27017/Products', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let productRouter = require('../routes/Byproduct');
// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express  -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data',productRouter);
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
  res.render('error', { title: 'Error'});
});

module.exports = app;
