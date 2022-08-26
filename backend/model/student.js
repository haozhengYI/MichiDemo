const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
  userAccount:String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dob: String, // 生日
  currentAddress: String,
  permanentAddress: String,
  gender: String,
  ssn: String,
  passport: String,//护照或绿卡号码
  visa: String,
  appEmail: String,//申请所用的邮箱账号
  appPsw:String,//申请所用的邮箱密码
  citizen:String,//国籍
  //标化成绩类
  TOEFL:String,
  TOEFLR:String,//托福阅读
  TOEFLL:String,//托福听力
  TOEFLS:String,//托福口语
  TOEFLW:String,//托福写作
  GRE: String,
  GREV: String,//GRE Verbal部分成绩
  GREVP: String,
  GREQ: String,
  GREQP: String,
  GREW: String,
  GREWP: String,
  GMAT: String,//GMAT 部分
  GMATV: String,
  GMATVP: String,
  GMATQ: String,
  GMATQP: String,
  GMATW: String,
  GMATWP: String,
  GMATR: String,
  GMATRP: String,
  OtherStandardTest: String,//其他类标化成绩
  //Skills & Hobbies
  Language:String, 
  ComputerSkills: String,//计算机技能
  OtherSkills: String,//其他技能或证书
  Hobbies: String,//爱好
  //Professional Interest专业兴趣
  Professional1: String,
  Professional2: String,
  Professional3: String,
  //Career Plan职业规划
  CareerPlan1: String,
  CareerPlan2: String,
  //Personal Strength个人优势
  Strength1: String,
  Strength2: String,
  //母亲信息
  MomName: String,
  MomAddress: String,
  MomOrganazation: String,
  MomJob: String,
  MomEducation:String,//母亲最高学历
  MomSchool:String,//母亲毕业院校
  MomGraduation: String,//母亲毕业时间
  MomPhone: String,
  MomEmail: String,
  //父亲信息
  FatName: String,
  FatAddress: String,
  FatOrganazation: String,
  FatJob: String,
  FatEducation:String,//母亲最高学历
  FatSchool:String,//母亲毕业院校
  FatGraduation: String,//母亲毕业时间
  FatPhone: String,
  FatEmail: String,
  //申请年级
  year: String,
});

module.exports = mongoose.model('Student', studentSchema);