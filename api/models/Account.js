const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  user_id: { type: String, required: true, trim: true },
  user_number: { type: Number, required: true, trim: true },
  user_email: { type: String, required: true, trim: true },
  user_bookmark_list: [{
    bookmark_id: { type: String, required: true, trim: true },
    bookmark_title: { type: String, required: true, trim: true },
  }],
  user_role: { type: String, required: true, trim: true, enum: ['admin', 'user'], default:'user' },
  user_status: { type: String, required: true, trim: true, enum: ['allow', 'ban'], default:'allow' },
  user_setting: [{
    user_theme: { type: String, required: true, trim: true, enum: ['system', 'light', 'dark'], default:'system' },
    user_font: { type: String, required: true, trim: true, enum: ['text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'], default:'text-base' },
  }],
},{
  timestamps: {
    createdAt: 'user_time_created',
    updatedAt: 'user_time_updated'
  },
  versionKey: false,
});

module.exports = mongoose.model('Account', AccountSchema);