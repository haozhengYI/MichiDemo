import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Recomletter } from './recletter.model';

@Injectable({providedIn: 'root'})
export class RecomletterService {

  //声明 变量信息
  private recomletters : Recomletter[] = [];
  private recomletter : Recomletter;
  private recomletterS : Recomletter[] = [];
  private recomlettersUpdated = new Subject<Recomletter[]>();


  constructor(private http: HttpClient) { }
  
  getRecomletter() : any {
    this.http.get<{recomletters: Recomletter[]}>('/api/recomletters').subscribe((Data) => {
        this.recomletters = Data.recomletters;
        this.recomletter = this.recomletters[0];
        
        this.recomlettersUpdated.next([...this.recomletters]);
      
    });
  }
  getrecommendersUpdatedListener() {
    return this.recomlettersUpdated.asObservable();
  }

  addRecomletter(
    id: string,
    schoolID:String, //对应申请学校的id
    studentID:String,//对应学生的id
    recommender:String,//推荐人id
    recommenderName:String,//推荐人名字
    type:String,//推荐信为 acedemic / professional
    state: String,//推荐信状态（提交/未提交/弃用）
  ){
    const recomletter: Recomletter = {
      _id: null,
      schoolID:schoolID, //对应申请学校的id
      studentID:studentID,//对应学生的id
      recommender:recommender,//推荐人id
      recommenderName:recommenderName,//推荐人名字
      type:type,//推荐信为 acedemic / professional
      state: state,//推荐信状态（提交/未提交/弃用）
    };
    this.http.post('/api/recomletteradd', recomletter).subscribe((responseData) =>{
        this.recomletterS.push(recomletter);
        this.recomlettersUpdated.next([...this.recomletterS]);
    });
  }

  
}