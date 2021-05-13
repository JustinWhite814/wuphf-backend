const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Index: GET all the Users
router.get('/', (req, res, next) => {
  User.find({})
    .then((users) => res.json(users))
    .catch(next);
});

// Show: Get a User by ID
router.get('/:username', (req, res, next) => {
  User.find({unsername: req.params.username})
    .then((user) => res.json(user))
    .catch(next);
});

// Create: Create a new User
router.post('/', (req, res, next) => {
  User.create(req.body)
    .then((newUser) => res.json(newUser))
    .catch(next);
});

// Update: Edit a Post
router.put('/:username', (req, res, next) => {
  User.findOneAndUpdate({ username: req.params.username }, req.body, { new: true })
    .then((user) => res.json(user))
    .catch(next);
});

// Delete: Delete a resource in the DB
router.delete('/:username', (req, res, next) => {
  User.findOneAndDelete({ username: req.params.username })
    .then((user) => res.json(user))
    .catch(next);
});

module.exports = router;
