export interface Task {
    _id: String;
    userAccount:String;//学生的id
    studentname:String;//学生名字
    assigned:String;// 被Assigned人信息
    content: String;//进度内容
    tdate:String;//进度日期
    tstate:String;//进度状态（"完成/未完成"）
    ttype:String;//进度类型（"紧急/一般/比较紧急"）
  }