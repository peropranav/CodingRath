var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/codingrath');

var db = mongoose.connection;

// User Schema
var AdminSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    }

});
