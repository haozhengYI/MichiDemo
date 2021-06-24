const mongoose = require('mongoose');
const educationSchema = mongoose.Schema({//教育背景
  userAccount:String,//学生的id
  type: String,//类型：本科，研究生，高中
  educationName: String,
  educationLocation:String,
  educationStart:String,//在校起始日期
  educationEnd:String,//在校结束日期
  major: String,
  Degree:String,
  GPA:String,
  MajorGPA:String,//专业GPA
  SecondDegree:String,//双专业
  SecondGPA:String,//第二专业 GPA
  other:String,
});

module.exports = mongoose.model('Education', educationSchema);