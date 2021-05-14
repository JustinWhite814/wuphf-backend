const { Schema } = require('mongoose');
const mongoose = require('../db/connection');
const User = require('./UserModel')

// make a new schema with 2 properties, and assign it to a variable
const PostSchema = new mongoose.Schema({
    content: {String, required:true},
    author: {type: Schema.Types.ObjectId, ref: "User", required:true},
    likes: [{type: Schema.Types.ObjectId, ref: "User"}],
    thread: [{type: String}]
  }, {timestamp: true});

// instantiate the model, calling it "Post" and with the schema we just made
const Post = mongoose.model('Post', PostSchema);

// export the newly created model
module.exports = Post;