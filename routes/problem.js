
var express=require('express');
var app=express();
const router = require('express').Router();
const Problem=require('../models/Problem');
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./AwsConfig.json');
var fs =  require('fs');
var s3 = new AWS.S3();
var RATH_STUB_BUCKET = 'rathstubfiles';
var RATH_MAIN_BUCKET = 'rathmainfiles';
var RATH_TESTCASE_BUCKET = 'rathtestcases';
var multer = require('multer');
var upload = multer({ dest: './uploads' });
var AWSAccessKeyId="AKIAIQVR26OY5AR6JWMQ";
var AWSSecretKey="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";

router.get('/add-coding-problem', function(req, res, next) {
    res.render('add-coding-problem', {  });
});


router.get('/', function(req, res, next) {
    var db = req.db;
    var problems = db.get('problem');
    problems.find({}, {}, function(err, posts){
        res.render('index', { problems: problems });
    });
});

send_to_amazon=function(file_path, bucket){
    console.log('SEND TO AMAZON')
    fs.readFile(file_path, function (err, data) {
        console.log('SEND TO AMAMAMA')
        if (err) { throw err; }
        params = {Bucket: RATH_TESTCASE_BUCKET, Key: AWSSecretKey, Body: data };
        s3.putObject(params, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log("Successfully uploaded data to myBucket/myKey");
                console.log(data);
            }
        });
    });
};

router.post('/add-coding-problem',upload.single('testcases'), function(req, res, next) {
    if(req.file){
        /** When using the "single"
         data come in "req.file" regardless of the attribute "name". **/
        var tmp_path = req.file.path;

        console.log(tmp_path)
        /** The original name of the uploaded file
         stored in the variable "originalname". **/
        var target_path = 'uploads/' + req.file.originalname;

        console.log(target_path)
        /** A better way to copy the uploaded file. **/
        var src = fs.createReadStream(tmp_path);
        var dest = fs.createWriteStream(target_path);
        src.pipe(dest);



        var testcasesFileName = req.file.filename;

        // upload testcases to S3 bucket
        var testcaseS3Link = send_to_amazon(target_path, RATH_TESTCASE_BUCKET)
        //update problem with s3 link
        // upload maincode to S3 bucket
        var mainS3Link = send_to_amazon(target_path, RATH_MAIN_BUCKET)
        // update problem with S3 link in problem
        // upload scaffold to S3 bucket
        var stubS3Link= send_to_amazon(target_path, RATH_STUB_BUCKET)
        // update scaffold with S3 link in problem

         console.log(testcasesFileName);
         console.log(mainS3Link);
         console.log(stubS3Link);

    } else {
        console.log("ANKUR")
    }
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

        res.location('/problem/add-coding-problem');
        res.redirect('/problem/add-coding-problem')
    }
});


router.get('/view-problem-list',function (req,res) {

res.render('view-problem-list.ejs',
    {
        problemListPara:[
            {
                ques_label:"Merge Two Linked List"

            },
            {
                difficulty_level:"EASY"


            },
            {
                ques_Id:"101"
            }
        ]

    })
})


router.get('/view-single-problem/:id',function (req,res) {
    var tag=req.params.tag;
    var id=req.params.id;
        res.render('view-single-problem.ejs',

            {
                basic: [


                    {
                        ques_Id: "101"
                    },

                    {
                        ques_label: "Merge Two Linked List"
                    },

                    {
                        difficulty_level: "EASY"

                    },
                    {
                        statement: "After getting her PhD, Christie has become a celebrity at her university, and her facebook profile is full of friend requests. Being the nice girl she is, Christie has accepted all the requests.\n" +
                        "\n" +
                        "Now Kuldeep is jealous of all the attention she is getting from other guys, so he asks her to delete some of the guys from her friend list.\n" +
                        "\n" +
                        "To avoid a 'scene', Christie decides to remove some friends from her friend list, since she knows the popularity of each of the friend she has, she uses the following algorithm to delete a friend."
                    },
                    {
                        constraints: "1<=T<=1000"
                    },
                    {
                        input_format: "3 100 1"
                    },
                    {
                        output_format: "19 12 17 "

                    },

                    {
                        sample_Input: "8 9 20 76"
                    },
                    {
                        sample_Output: "67 4 5 34 "
                    }
                ]
            }
        );


})

module.exports=router;