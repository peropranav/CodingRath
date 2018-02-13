var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codingRath');

var db = mongoose.connection;

const Schema = mongoose.Schema;
var studentSchema = new Schema({
    student_Id:{
        type: Number
    },
    name:{
        type: String
    },
    email_Id:{
        type: String
    },
    mobile_Number:{
        type: Number
    }
});


var Student = module.exports=mongoose.model('Student', studentSchema);

module.exports.createStudent = function(newStudent, callback){
    newStudent.save(callback);
}



module.exports.getStudentById = function(studentId, callback){
    console.log(Student.findById(studentId, callback));
}

