const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Bookmark = require('../models/Bookmark');

router.get('/list', (req, res) => {
  Bookmark.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.get('/_id/:id', (req, res) => {
  Bookmark.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.get('/id/:id', (req, res) => {
  Bookmark.findOne({ bookmark_id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.get('/no/:number', (req, res) => {
  Bookmark.findOne({ bookmark_number: req.params.number })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.post('/create', (req, res) => {
  Bookmark.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.put('/edit/:id', (req, res) => {
  Bookmark.findOneAndUpdate({ bookmark_id: req.params.id }, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.delete('/delete/:id', (req, res) => {
  Bookmark.findOneAndDelete({ bookmark_id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

module.exports = router;