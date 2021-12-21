var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var handlebars = require('express-handlebars');
var { ppid } = require('process');
var port = 3001
const bodyparser = require('body-parser');
const multer = require('multer');

var route = require('./routes');
require('./config/db')
    // //Connect to DB
    // db.connect();

var app = express();
//public 
app.use(express.static(path.join(__dirname, 'public')));

var hbs = handlebars.create({
    helpers: {
        sayHello: function() { alert("Hello World") },
        getStringifiedJson: function(value) {
            return JSON.stringify(value);
        }
    },
    extname: '.hbs',
    defaultLayout: 'main',

    // partialsDir: ['views/partials/']
});


// view engine setup
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
//form 
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());

//Routes init
route(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
)