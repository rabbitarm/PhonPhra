const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ItemCategory = require('../models/ItemCategory');

router.get('/list', (req, res) => {
  ItemCategory.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.get('/_id/:id', (req, res) => {
  ItemCategory.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.get('/id/:id', (req, res) => {
  ItemCategory.findOne({ item_category_id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.get('/no/:number', (req, res) => {
  ItemCategory.findOne({ item_category_number: req.params.number })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.post('/create', (req, res) => {
  ItemCategory.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.put('/edit/:id', (req, res) => {
  ItemCategory.findOneAndUpdate({ item_category_id: req.params.id }, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.delete('/delete/:id', (req, res) => {
  ItemCategory.findOneAndDelete({ item_category_id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

module.exports = router;