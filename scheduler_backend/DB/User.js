const mongoose = require('mongoose');

const user= mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: String
    },
    subjectcode:{
        type: String,
        required: true,
        unique: true,
    },
    subjectname:{
        type: String
    }
});

module.exports = User = mongoose.model('user', user);
