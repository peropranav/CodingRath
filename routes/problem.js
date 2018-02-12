
var express=require('express');
var app=express();
const router = require('express').Router();
const User=require('../db/user')



router.get('/:tag/:id',function (req,res) {
    var tag=req.params.tag;
    var id=req.params.id;






    res.render('problem.ejs',


        {
            basic: [


                {
                    ques_Id:
                },

                {
                    ques_label:
                },

                {
                    difficulty_level:

                },
                {
                    statement:
                },
                {
                    constraints:
                },
                {
                    input_format :
                },
                {
                    output_format:

                },

                {
                    sample_Input:
                },
                {
                    sample_Output:
                }
            ]
        }


        );
})