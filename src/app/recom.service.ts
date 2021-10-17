import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Recommender } from './recom.model';

@Injectable({providedIn: 'root'})
export class RecommenderService {

  //声明 变量信息
  private recommenders : Recommender[] = [];
  private recommender : Recommender;
  private recommenderS : Recommender[] = [];
  private recommendersUpdated = new Subject<Recommender[]>();


  constructor(private http: HttpClient) { }
  
  getRecommender() : any {
    this.http.get<{recommenders: Recommender[]}>('http://localhost:3000/recommenders').subscribe((Data) => {
        //console.log(Data);
        this.recommenders = Data.recommenders;
        //console.log(this.recommenders[0].userAccount);
        this.recommender = this.recommenders[0];
        //console.log(this.hotel.email);
        
        this.recommendersUpdated.next([...this.recommenders]);
      
    });
    // console.log("From  Hotel");
    // console.log(this.hotel)
    // return this.hotel;
  }
  getrecommendersUpdatedListener() {
    return this.recommendersUpdated.asObservable();
  }

  addRecommender(
    id: string,
    userAccount:String, //对应学生的id
    firstName: String,//推荐人名字
    lastName: String,
    email: String,//推荐人email
    phone: String,//
    title: String, // 推荐人职称
    location: String,//地址
    gender: String,//性别
    education:String, //学历
    organization:String, //所在单位
    duration:String,//在此单位工作时间年限
    position:String, //职务
    relation:String,//与申请者关系
    other:String,//其他信息
  ){
    const recommender: Recommender = {
      _id: null,
      userAccount:userAccount,//学生id
      firstName: firstName,//推荐人名字
      lastName: lastName,
      email: email,//推荐人email
      phone: phone,//
      title: title, // 推荐人职称
      location: location,//地址
      gender: gender,//性别
      education:education, //学历
      organization:organization, //所在单位
      duration:duration,//在此单位工作时间年限
      position:position, //职务
      relation:relation,//与申请者关系
      other:other,//其他信息
    };
    this.http.post('http://localhost:3000/recommenderadd', recommender).subscribe((responseData) =>{
        this.recommenderS.push(recommender);
        this.recommendersUpdated.next([...this.recommenderS]);
    });
  }

  
}