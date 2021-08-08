const mongoose = require('mongoose');
const statementSchema = mongoose.Schema({//文书
  schoolID:String, //对应申请学校的id
  question: String,//题目内容
  stype:String,//文书种类(PS/SOP/Essay)
  words:String,//字数
});

module.exports = mongoose.model('Statement', statementSchema);