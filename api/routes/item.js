const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Item = require('../models/Item');

router.get('/list', (req, res) => {
  Item.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.get('/_id/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.get('/id/:id', (req, res) => {
  Item.findOne({ item_id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.get('/no/:number', (req, res) => {
  Item.findOne({ item_number: req.params.number })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.post('/create', (req, res) => {
  Item.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.put('/edit/:id', (req, res) => {
  Item.findOneAndUpdate({ item_id: req.params.id }, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.delete('/delete/:id', (req, res) => {
  Item.findOneAndDelete({ item_id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

module.exports = router;