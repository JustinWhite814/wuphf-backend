const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

// Index: GET all the Users
router.get("/", (req, res, next) => {
  User.find({})
    .then((users) => res.json(users))
    .catch(next);
});

// Show: Get a User by ID
router.get("/:username", (req, res, next) => {
  User.findOne({ username: req.params.username })
    // .populate("posts")
    // .exec((error, posts) => {
    //   if (error) return console.log("Post population error");
    // })
    .then((user) => res.json(user))
    .catch(next);
});

// Create: Create a new User
router.post("/", (req, res, next) => {
  User.create(req.body)
    .then((newUser) => res.json(newUser))
    .catch(next);
});

// Update: Update a User's information
router.put("/:username", (req, res, next) => {
  User.findOneAndUpdate({ username: req.params.username }, req.body, {
    new: true,
  })
    .then((user) => res.json(user))
    .catch(next);
});

// Delete: Delete a User from the database
router.delete("/:username", (req, res, next) => {
  User.findOneAndDelete({ username: req.params.username })
    .then((user) => res.json(user))
    .catch(next);
});

module.exports = router;
