var fs = require('fs');
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


router.post('/view-single-problem/:id',function (req,res) {
var idPar=req.params.id;
    var code=req.body.code;


            fs.writeFile('mynewfile3.java', code, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });



res.redirect('/problem/view-problem-list')


})

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
    var  sample_Output= req.body.sample_Output;
   var difficulty_level=req.body.difficulty_level;
    // Form Validator
    req.checkBody('ques_label','Name field is required').notEmpty();
    req.checkBody('difficulty_level','Level field is required').notEmpty();
    req.checkBody('statement','Statement field is required').notEmpty();
    req.checkBody('constraint','Constraint is not valid').notEmpty();


    req.checkBody('input_Format','input_format field is required').notEmpty();
    req.checkBody('output_Format','output_format field is required').notEmpty();

    req.checkBody('sample_Input','sample_input field is required').notEmpty();
    req.checkBody('sample_Output','sample_output field is required').notEmpty();


console.log(req.body);
    var errors = req.validationErrors();
    if(errors){

    }else{
        var new_Problem = new Problem({
            ques_label:ques_label,
            difficulty_level: difficulty_level,
            statement:statement,
            constraint: constraint,
            input_Format: input_Format,
            output_Format: output_Format,
            sample_Input: sample_Input,
            sample_Output: sample_Output
        }).save().then((newProblem) => {
            console.log('created new user: ', newProblem);
        done(null, newProblem);


    })

        res.location('/problem/add-coding-problem');
        res.redirect('/problem/add-coding-problem')
    }
});


router.get('/view-problem-list',function (req,res) {

    Problem.find({}, function (err, problem) {
       if(err)
       {
           console.log("some error occured")
       }
       else

           {
               console.log(problem)
             //  console.log(problem[0]._id)

               res.render('view-problem-list.ejs',
                   {
                    problem:problem
                   })

           }
        })




    })



router.get('/view-single-problem/:id',function (req,res) {
    var tag = req.params.tag;
    var id = req.params.id;

    Problem.findById({_id: req.params.id}, function (err, singleProblem) {

        if (err) {
            console.log("some  fucking error occured")
        }
        else {
            console.log(singleProblem)

            res.render('view-single-problem.ejs', {singleProblem: singleProblem})


        }


    })

})


module.exports=router;