const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String, 
      required: true
    },
    lastName: {
      type: String, 
    },
    username: {
      type: String, 
      required: true
    },
    password: String, 
    profilePhoto: String, 
    dob: String,
    location: String,
    // posts: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Post'
    // }], 
    bookmarks: [{type: String}],
  }, 
  {timestamp: true}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
