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
