import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Activity } from './activity.model';

@Injectable({providedIn: 'root'})
export class ActivityService {

  //声明 变量信息
  private activitys : Activity[] = [];
  private activity : Activity;
  private activityS : Activity[] = [];
  private activitysUpdated = new Subject<Activity[]>();


  constructor(private http: HttpClient) { }
  
  getActivity() : any {
    this.http.get<{activitys: Activity[]}>('http://localhost:3000/activitys').subscribe((Data) => {
        this.activitys = Data.activitys;
        this.activity = this.activitys[0];
        
        this.activitysUpdated.next([...this.activitys]);
      
    });
  }
  getactivitysUpdatedListener() {
    return this.activitysUpdated.asObservable();
  }

  addActivity(
    id: string,
    userAccount:String,//学生的id
    activityOrganization: String,
    activityStart:String,//起始日期
    activityEnd:String,//结束日期
    activityPosition: String,
    activityDescription:String,
  ){
    const activity: Activity = {
      _id: null,
      userAccount:userAccount,//学生的id
      activityOrganization: activityOrganization,
        activityStart:activityStart,//起始日期
        activityEnd:activityEnd,//结束日期
        activityPosition: activityPosition,
        activityDescription:activityDescription,

    };
    this.http.post('http://localhost:3000/activityadd', activity).subscribe((responseData) =>{
        this.activityS.push(activity);
        this.activitysUpdated.next([...this.activityS]);
    });
  }

  
}