const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatar: String,
  name: String,
  phone: String,
  role: String,
  country: String,
  city: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
