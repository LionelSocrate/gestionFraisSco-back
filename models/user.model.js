const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    uppercase: true,
    required: true,
    default: '',
  },
  firstname: {
    type: String,
    trim: true,
    uppercase: true,
    required: true,
    default: '',
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    max: 1024,
  },
  isAdmin: {
    type: Boolean,
    required: false,
    default: false,
  },
  isBlocked: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const UserModel = mongoose.models.users || mongoose.model('users', userSchema);
module.exports = UserModel;
