const mongoose = require('mongoose');
const publicationSchema = mongoose.Schema({//教育背景
  userAccount:String,//学生的id
  PublicationTitle: String,//题目
  PublicationJournal: String,//刊物
  PublicationDate: String,//时间
  PublicationLink: String,//链接
  PublicationAuthors: String,
  PublicationAbstract: String,
  PublicationLevel:String,
});

module.exports = mongoose.model('Publication', publicationSchema);