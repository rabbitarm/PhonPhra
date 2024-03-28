const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  bookmark_id: { type: String, required: true, trim: true },
  bookmark_number: { type: Number, required: true, trim: true },
  bookmark_title: { type: String, required: true, trim: true },
  bookmark_item_list: [{
    item_id: { type: String, required: false, trim: true },
    item_number: { type: Number, required: false, trim: true },
  }],
},{
  timestamps: {
    createdAt: 'bookmark_time_created',
    updatedAt: 'bookmark_time_updated',
  },
  versionKey: false,
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);