const mongoose = require('mongoose');
const experienceSchema = mongoose.Schema({//教育背景
  userAccount:String,//学生的id
  type: String,//类型：教学科研/工作经历
  institution: String,
  institutionLocation:String,
  experienceStart:String,//经历起始日期
  experienceEnd:String,//经历结束日期
  experienceposition: String,
  responsibilities:String,
  project:String,
  achievement:String,
});

module.exports = mongoose.model('Experience', experienceSchema);