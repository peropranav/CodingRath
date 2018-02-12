var mongoose = require('mongoose');

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

module.exports=mongoose.model('problem', problemSchema);
