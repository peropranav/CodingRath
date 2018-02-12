
var express=require('express');
var app=express();
const router = require('express').Router();
const problem=require('./problem')



router.get('/:tag/:id',function (req,res) {
    console.log('function call');
    var tag=req.params.tag;
    var id=req.params.id;
    res.render('problem.ejs',

        {
            basic: [
                {
                    ques_Id:"hi sample"
                },

                {
                    ques_label:"hi sample"
                },

                {
                    difficulty_level:"hi sample"

                },
                {
                    statement:"hi sample"
                },
                {
                    constraints:"hi sample"
                },
                {
                    input_format :"hi sample"
                },
                {
                    output_format:"hi sample"

                },

                {
                    sample_Input:"hi sample"
                },
                {
                    sample_Output:"hi sample"
                }
            ]
        }


        );
})

module.exports=router;