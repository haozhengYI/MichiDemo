export interface Experience {
    _id: String;
    userAccount:String;//学生的id
    type: String;//类型：本科，研究生，高中
    institution: String;
    institutionLocation:String;
    experienceStart:String;//经历起始日期
    experienceEnd:String;//经历结束日期
    experienceposition: String;
    responsibilities:String;
    project:String;
    achievement:String;
  }