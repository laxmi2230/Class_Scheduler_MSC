const mongoose = require('mongoose');

const user2 = mongoose.Schema({
  availableseats: {
    type: Number,
  },
  totalseats: {
    type: Number,
  },
  onlineseats: {
    type: Number,
  }, 
  offlineseats: {
    type: Number,
  },
  subjectcode: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user1",
    },
  ],
});

module.exports = User2 = mongoose.model('user2', user2);