
var express=require('express');
var app=express();
const router = require('express').Router();
const Student=require('../models/Student')

router.get('/view-student-profile', function(req, res, next) {
    res.render('view-student-profile', {  });
});

router.get('/view-all-students', function(req, res, next) {
    var db = req.db;
    var students = db.get('students');
    students.find({}, {}, function(err, posts){
        res.render('index', { students: students });
    });
});