import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Interview } from './interview.model';

@Injectable({providedIn: 'root'})
export class InterviewService {

  //声明 变量信息
  private interviews : Interview[] = [];
  private interview : Interview;
  private interviewS : Interview[] = [];
  private interviewsUpdated = new Subject<Interview[]>();


  constructor(private http: HttpClient) { }
  
  getActivity() : any {
    this.http.get<{interviews: Interview[]}>('http://localhost:3000/interviews').subscribe((Data) => {
        this.interviews = Data.interviews;
        this.interview = this.interviews[0];
        
        this.interviewsUpdated.next([...this.interviews]);
      
    });
  }
  getinterviewsUpdatedListener() {
    return this.interviewsUpdated.asObservable();
  }

  addInterview(
    id: string,
    interviewUniv:String,//题目对应大学
    interviewSchool:String,//题目对应学院
    interviewProgram: String,//题目对应项目
   interviewTitle:String,//题目内容
   interviewCato: String,//题目类型（如kira，personal）
   interviewTime:String,//发布日期
   interviewPeople:String,//发布人员
   interviewDuration: String,//题目时长
   interviewOther:String,//其他备注信息
  ){
    const interview: Interview = {
      _id: null,
      interviewUniv:interviewUniv,//题目对应大学
    interviewSchool:interviewSchool,//题目对应学院
    interviewProgram: interviewProgram,//题目对应项目
   interviewTitle:interviewTitle,//题目内容
   interviewCato: interviewCato,//题目类型（如kira，personal）
   interviewTime:interviewTime,//发布日期
   interviewPeople:interviewPeople,//发布人员
   interviewDuration: interviewDuration,//题目时长
   interviewOther:interviewOther,//其他备注信息
    };
    this.http.post('http://localhost:3000/interviewadd', interview).subscribe((responseData) =>{
        this.interviewS.push(interview);
        this.interviewsUpdated.next([...this.interviewS]);
    });
  }

  
}