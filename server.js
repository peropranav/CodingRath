var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path = require('path');


var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var expressValidator = require('express-validator');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var mongo = require('mongodb');
var bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codingRath');
var db = mongoose.connection;


const port=process.env.PORT || 3000;

//setting middleware for bodyparser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
// Handle Sessions
app.use(session({
    secret:'secret',
    saveUninitialized: true,
    resave: true
}));


app.set('view engine', 'ejs');

var problem=require('./routes/problem');

app.set('views', path.join(__dirname, 'views'));
app.use('/problem',problem);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port,function () {
    console.log("listening at port 3000")
});

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
            msg   : msg,
            value : value
        };
    }
}));
