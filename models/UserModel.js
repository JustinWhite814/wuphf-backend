const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String, 
      required: true
    },
    username: {
      type: String, 
      required: true
    },
    password: String, 
    profilePhoto: String, 
    dob: Date,
    location: String,
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }], 
    bookmarks: [{type: String}],
  }, 
  {timestamp: true}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
