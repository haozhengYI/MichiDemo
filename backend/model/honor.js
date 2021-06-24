const mongoose = require('mongoose');
const honorSchema = mongoose.Schema({//教育背景
  userAccount:String,//学生的id
  honorDate: String,
  prize:String,
  percentage:String,
  grantor: String,
});

module.exports = mongoose.model('Honor', honorSchema);