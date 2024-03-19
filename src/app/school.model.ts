export interface School {
    _id: String;
    userAccount:String;//学生的id
    state: String; //申请状态（四种：进行，完成，收到offer，收到拒信）
    univName: String;//大学名称
    schoolName: String;//学院名称
    majorName: String;//专业名称
    ddl1: String;//DDL 1
    ddl2: String;//DDL 2
    ddl3: String;//DDL 3
    interview: String;//面试 （两种：有-参加时间，无，）
    videoEssay: String;// videoEssay(三种：无，申请前完成，申请后完成)
    link: String;//链接
    applyAccount:String;//申请账号
    applyPassword:String;//申请用密码
    recommNumber:String;//需要推荐信数量
    other:String;
    level:String;// 存放可能性（四种：正常，不可能，冲刺，保底）
    gre:String;// 是否强制GRE（两种：强制，optional）
  }