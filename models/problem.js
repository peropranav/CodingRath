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
    difficulty_level:{
        type:String
    },
    tag:{
        type:String
    },
    test_Cases:{
        type:String
    },
    solution:{
        type:String
    },
    code_Stub:{
        type:String
    }
});


var Problem = module.exports=mongoose.model('Problem', problemSchema);

module.exports.createProblem = function(newProblem, callback){
    newProblem.save(callback);
}



module.exports.getProblemById = function(problemId, callback){
    console.log(Problem.findById(problemId, callback));
}

