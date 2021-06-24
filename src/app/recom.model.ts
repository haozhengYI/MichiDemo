export interface Recommender {
    _id: String;
    userAccount:String; //对应学生的id
    firstName: String;//推荐人名字
    lastName: String;
    email: String;//推荐人email
    phone: String;//
    title: String; // 推荐人职称
    location: String;//地址
    gender: String;//性别
    education:String;//学历
    organization:String;//所在单位
    duration:String;//在此单位工作时间年限
    position:String; //职务
    relation:String;//与申请者关系
    other:String;//其他信息
  }