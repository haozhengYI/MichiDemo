const mongoose = require('mongoose');
const activitySchema = mongoose.Schema({//教育背景
  blogTitle:String,//标题
  blogSubtitle: String,//副标题
  blogTime:String,//发布日期
  blogPicture:String,//图片
  blogLink: String,//link
  countNumber:String,//计数
});

module.exports = mongoose.model('Blog', activitySchema);