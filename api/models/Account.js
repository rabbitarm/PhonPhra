const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  user_id: { type: String, required: true, trim: true },
  user_number: { type: Number, required: true, trim: true },
  user_email: { type: String, required: true, trim: true },
  user_bookmark_list: [{
    bookmark_id: { type: String, required: false, trim: true },
    bookmark_title: { type: String, required: true, trim: true },
  }],
},{
  timestamps: {
    createdAt: 'user_time_created',
    updatedAt: 'user_time_updated'
  },
  versionKey: false,
});

module.exports = mongoose.model('Account', AccountSchema);