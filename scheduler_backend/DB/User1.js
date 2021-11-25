const mongoose = require('mongoose');
  
const user1= mongoose.Schema({
    fullname:{
        type: String,
    },
    dob:{
        type: Date
    },
    roll_no:{
       type: Number
    },
    subjectcode: {
        type: String
    },
    offline_online: {
        type: String
    }
});

module.exports = User1 = mongoose.model('user1', user1);