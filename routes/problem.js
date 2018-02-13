
var express=require('express');
var app=express();
const router = require('express').Router();
const Problem=require('../models/Problem')

router.get('/addcodingproblem', function(req, res, next) {
    res.render('addcodingproblem', {  });
});



router.post('/addcodingproblem', function(req, res, next) {
    // console.log(req.body);
    var ques_label = req.body.ques_label;
    var   statement= req.body.statement;
    var  constraint= req.body.constraint;
    var  input_Format= req.body.input_Format;
    var  output_Format= req.body.output_Format;
    var  sample_Input= req.body.sample_Input;
    var  sample_Output= req.sample_Output;

    // Form Validator
    req.checkBody('ques_label','Name field is required').notEmpty();
    req.checkBody('statement','Email field is required').notEmpty();
    req.checkBody('constraint','Email is not valid').notEmpty();
    req.checkBody('sample_Input','Username field is required').notEmpty();
    req.checkBody('sample_Output','Password field is required').notEmpty();


    var errors = req.validationErrors();
    if(errors){

    }else{
        var new_Problem = new Problem({
            ques_label:ques_label,
            statement:statement,
            constraint: constraint,
            input_Format: input_Format,
            output_Format: output_Format,
            sample_Input: sample_Input,
            sample_Output: sample_Output
        })
        Problem.createProblem(new_Problem,function(err, problem){
            if(err)
                throw err;
            console.log(problem);
        })

        res.location('/problem/addcodingproblem');
        res.redirect('/problem/addcodingproblem')
    }

    console.log(ques_label+" "+statement+" "+constraint+" "+input_Format+" "+ output_Format+" "+sample_Input+" "+sample_Output);
    res.render('addcodingproblem');
   // console.log(req.body);
      var ques_label = req.body.ques_label;
      var   statement= req.body.statement;
      var  constraint= req.body.constraint;
      var  input_Format= req.body.input_Format;
      var  output_Format= req.body.output_Format;
      var  sample_Input= req.body.sample_Input;
      var  sample_Output= req.sample_Output;

      // Form Validator
      req.checkBody('ques_label','Name field is required').notEmpty();
      req.checkBody('statement','Email field is required').notEmpty();
      req.checkBody('constraint','Email is not valid').notEmpty();
      req.checkBody('sample_Input','Username field is required').notEmpty();
      req.checkBody('sample_Output','Password field is required').notEmpty();


      var errors = req.validationErrors();
      if(errors){

      }else{
          var new_Problem = new Problem({
              ques_label:ques_label,
              statement:statement,
              constraint: constraint,
              input_Format: input_Format,
              output_Format: output_Format,
              sample_Input: sample_Input,
              sample_Output: sample_Output
          })
          Problem.createProblem(new_Problem,function(err, problem){
              if(err)
                  throw err;
              console.log(problem);
          })

          res.location('/problem/addcodingproblem');
          res.redirect('/problem/addcodingproblem')
      }

      console.log(ques_label+" "+statement+" "+constraint+" "+input_Format+" "+ output_Format+" "+sample_Input+" "+sample_Output);
      res.render('addcodingproblem');
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