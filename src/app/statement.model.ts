export interface Statement {
    _id: String;
    schoolID:String; //对应申请学校的id
    question: String;//题目内容
    stype:String;//文书种类(PS/SOP/Essay)
    words:String;//字数
  }