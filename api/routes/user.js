const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

/*
router.get('/list', (req, res) => {
  User.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});
*/

router.get('/_id/:id', (req, res) => {
  User.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.get('/id/:id', (req, res) => {
  User.findOne({ user_id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

/*
router.get('/no/:number', (req, res) => {
  User.findOne({ user_number: req.params.number })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});
*/

router.post('/create', (req, res) => {
  User.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.put('/edit/:id', (req, res) => {
  User.findOneAndUpdate({ user_id: req.params.id }, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.delete('/delete/:id', (req, res) => {
  User.findOneAndDelete({ user_id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

module.exports = router;