var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/codingrath');

var db = mongoose.connection;
var ProblemSchema = mongoose.Schema({
    ques_Id:{
        type: number
    },
    ques_label:{
        type: String,
    },
    statement:{
        type: String
    } ,
    constraints:{
        type:string
    },
    input_format:{
        type:String
    },
    output_format:{
        type:String
    },
    Sample_Input:{
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
    test_cases:{
        type:String
    },
    solution:{
        type:String
    },
    code_stub:{
        type:String
    }
});
