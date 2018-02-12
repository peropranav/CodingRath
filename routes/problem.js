
var express=require('express');
var app=express();
const router = require('express').Router();
const problem=require('../models/problem')

router.get('/addcodingproblem', function(req, res, next) {
        res.render('addcodingproblem', {  });
});


router.get('/:tag/:id',function (req,res) {
    var tag=req.params.tag;
    var id=req.params.id;






    res.render('problem.ejs',


        {
            basic: [


                {
                    ques_Id:"101"
                },

                {
                    ques_label:"Merge Two Linked List"
                },

                {
                    difficulty_level:"EASY"

                },
                {
                    statement:"After getting her PhD, Christie has become a celebrity at her university, and her facebook profile is full of friend requests. Being the nice girl she is, Christie has accepted all the requests.\n" +
                    "\n" +
                    "Now Kuldeep is jealous of all the attention she is getting from other guys, so he asks her to delete some of the guys from her friend list.\n" +
                    "\n" +
                    "To avoid a 'scene', Christie decides to remove some friends from her friend list, since she knows the popularity of each of the friend she has, she uses the following algorithm to delete a friend."
                },
                {
                    constraints:"1<=T<=1000"
                },
                {
                    input_format :"3 100 1"
                },
                {
                    output_format:"19 12 17 "

                },

                {
                    sample_Input:"8 9 20 76"
                },
                {
                    sample_Output:"67 4 5 34 "
                }
            ]
        }


        );
})

module.exports=router;