export interface Recomletter {
    _id: String;
    schoolID:String; //对应申请学校的id
    studentID:String;//对应学生的id
    recommender:String;//推荐人id
    recommenderName:String;//推荐人名字
    type:String;//推荐信为 acedemic / professional
    state: String;//推荐信状态（提交/未提交/弃用）
  }