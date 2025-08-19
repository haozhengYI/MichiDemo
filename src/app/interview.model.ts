export interface Interview {
    _id: String;
    interviewUniv:String;//题目对应大学
    interviewSchool:String;//题目对应学院
    interviewProgram: String;//题目对应项目
   interviewTitle:String;//题目内容
   interviewCato: String;//题目类型（如kira，personal）
   interviewTime:String;//发布日期
   interviewPeople:String;//发布人员
   interviewDuration: String;//题目时长
   interviewOther:String;//其他备注信息
  }