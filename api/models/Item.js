const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  item_id: { type: String, required: true, trim: true },
  item_number: { type: Number, required: true, trim: true },
  item_name: { type: String, required: true, trim: true },
  item_desc: { type: String, required: true, trim: true },
},{
  timestamps: {
    createdAt: 'item_time_created',
    updatedAt: 'item_time_updated',
  },
  versionKey: false,
});

module.exports = mongoose.model('Item', ItemSchema);