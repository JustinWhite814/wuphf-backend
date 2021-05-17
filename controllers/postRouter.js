const express = require("express");
const router = express.Router();
const Post = require("../models/PostModel");

// Index: GET all the Posts
router.get("/", (req, res, next) => {
  Post.find({})
    // .populate('author')
    // .exec((error, posts) => {
    //   if (error) return console.log('author population error')
    //   console.log(JSON.stringify(posts, null, "\t"))
    // })
    .then((result) => res.json(result))
    .catch(next);
});

// Show: Filter Posts by username
// username will change to userId, we should switch to a try, catch approach for this
router.get("/:username", (req, res, next) => {
  Post.find({author: req.params.username})
    // .populate('author')
    // .exec((error, posts) => {
    //   if (error) return console.log('author population error')
    //   console.log(JSON.stringify(posts, null, "\t"))
    // })
    .then((result) => res.json(result))
    .catch(next);
});

// Show: Get a Post by ID
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id)
    // .populate('author')
    // .exec((error, posts) => {
    //   if (error) return console.log('author population error')
    //   console.log(JSON.stringify(posts, null, "\t"))
    // })
    .then((result) => res.json(result))
    .catch(next);
});

// Create: Create a new post
router.post("/", (req, res, next) => {
  Post.create(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

// Update: Edit a Post
router.put("/:id", (req, res, next) => {
  Post.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((result) => res.json(result))
    .catch(next);
});

// Delete: Delete a Post in the database
router.delete("/:id", (req, res, next) => {
  Post.findOneAndDelete({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
