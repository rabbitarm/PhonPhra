const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_id: { type: String, required: true, trim: true },
  user_number: { type: Number, required: true, trim: true },
  user_name: { type: String, required: true, trim: true },
  user_email: { type: String, required: true, trim: true },
  user_profile: [{
    user_birthday: { type: Number, required: false, trim: true },
    user_gender: { type: String, required: false, trim: true, enum: ['male', 'female', 'notspecified'] },
  }],
  user_bookmark_list: [{
    bookmark_id: { type: String, required: true, trim: true },
    bookmark_title: { type: String, required: true, trim: true },
  }],
  user_role: { type: String, required: true, trim: true, enum: ['admin', 'user'], default:'user' },
  user_status: { type: String, required: true, trim: true, enum: ['allow', 'ban'], default:'allow' },
  user_setting: [{
    setting_theme: { type: String, required: true, trim: true, enum: ['system', 'light', 'dark'], default:'system' },
    setting_fontsize: { type: String, required: true, trim: true, enum: ['text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'], default:'text-base' },
    setting_widget_calendar: { type: Boolean, required: true, trim: true, default:false },
    setting_widget_countnumber: { type: Boolean, required: true, trim: true, default:false },
  }],
},{
  timestamps: {
    createdAt: 'user_time_created',
    updatedAt: 'user_time_updated'
  },
  versionKey: false,
});

module.exports = mongoose.model('User', UserSchema);