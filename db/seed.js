const users = require("./userSeed.json");
const posts = require("./postSeed.json");
const User = require("../models/UserModel.js");
const Post = require("../models/PostModel.js");

User.deleteMany({})
  .then(() => {
    return User.insertMany(users);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });

Post.deleteMany({})
  .then(() => {
    return Post.insertMany(posts);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
