const mongoose = require("../db/connection");

const PostSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true
    // },
    // likes: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User"
    // }],
  },
  { timestamp: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
