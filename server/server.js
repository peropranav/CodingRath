var express=require('express');
var app=express();
var bodyParser=require('body-parser');
const port=process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codingRath');
//setting middleware for bodyparser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

var problem=require('../routes/problem');


app.use('/problem',problem);





app.listen(port,function () {
    console.log("listening at port 3000")
});
