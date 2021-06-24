const mongoose = require('mongoose');
const activitySchema = mongoose.Schema({//教育背景
  userAccount:String,//学生的id
  activityOrganization: String,
  activityStart:String,//起始日期
  activityEnd:String,//结束日期
  activityPosition: String,
  activityDescription:String,
});

module.exports = mongoose.model('Activity', activitySchema);