const mongoose = require('mongoose');

const ItemCategorySchema = new mongoose.Schema({
  item_category_id: { type: String, required: true, trim: true },
  item_category_number: { type: Number, required: true, trim: true },
  item_category_title: { type: String, required: true, trim: true },
/*item_category_desc: { type: String, required: false, trim: true },*/
  item_category_status: { type: String, required: true, trim: true, enum: ['public', 'delete'], default:'public' },
/*item_editing: { type: Boolean, default: false },*/
},{
  timestamps: {
    createdAt: 'item_category_time_created',
    updatedAt: 'item_category_time_updated',
  },
  versionKey: false,
});

module.exports = mongoose.model('ItemCategory', ItemCategorySchema);