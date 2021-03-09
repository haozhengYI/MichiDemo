const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  UserAccount: String,
  UserPassword: String,
  //UserName: String,
  Role: String
});

module.exports = mongoose.model('User', userSchema);