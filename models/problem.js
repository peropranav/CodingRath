var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codingRath');

var db = mongoose.connection;

const Schema = mongoose.Schema;
var problemSchema = new Schema({
    ques_Id:{
        type: Number
    },
    ques_label:{
        type: String
    },
    difficulty_level:{
        type:String
    },
    statement:{
        type: String
    } ,
    constraints:{
        type:String
    },
    input_Format:{
        type:String
    },
    output_Format:{
        type:String
    },
    sample_Input:{
        type: String
    },
    sample_Output:{
        type:String
    },

    tag:{
        type:String
    },
    test_Cases_s3path:{
        type:String
    },
    solution_s3path:{
        type:String
    },
    mainFile_S3Path:{
        type:String
    },
    stub_s3path:{
        type:String
    }
});


var Problem = module.exports=mongoose.model('Problem', problemSchema);





module.exports.getProblemById = function(problemId, callback){
    console.log(Problem.findById(problemId, callback));
}

