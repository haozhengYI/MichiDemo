const mongoose = require('mongoose');
const notifSchema = mongoose.Schema({//通知
  userAccount:String,//学生的id
  content: String,//存储通知内容
  ndate:String,//通知日期
  nstate:String,//通知状态（"未读/已读"）
  ntype:String,//通知类型（"紧急/一般/比较紧急"）
});

module.exports = mongoose.model('Notif', notifSchema);