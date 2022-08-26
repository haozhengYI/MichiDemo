import { Injectable } from '@angular/core';
import { HotelM } from './hm.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { School } from './school.model';

@Injectable({providedIn: 'root'})
export class SchoolService {

  private hotelMUpdated = new Subject<HotelM[]>();
  private datahotel  :any;
  //声明 变量信息
  private schools : School[] = [];
  private school : School;
  private schoolS : School[] = [];
  private schoolsUpdated = new Subject<School[]>();


  constructor(private http: HttpClient) { }
  
  getSchool() : any {
    this.http.get<{schools: School[]}>('http://localhost:3000/schools').subscribe((Data) => {
        //console.log(Data);
        this.schools = Data.schools;
        console.log(this.schools[0].userAccount);
        this.school = this.schools[0];
        //console.log(this.hotel.email);
        
        this.schoolsUpdated.next([...this.schools]);
      
    });
    // console.log("From  Hotel");
    // console.log(this.hotel)
    // return this.hotel;
  }
  getschoolsUpdatedListener() {
    return this.schoolsUpdated.asObservable();
  }

  addSchool(
    id: string,
    userAccount:String,
    state: String, //申请状态（四种：进行，完成，收到offer，收到拒信）
    univName: String,//大学名称
    schoolName: String,//学院名称
    majorName: String,//专业名称
    ddl1: String,//DDL 1
    ddl2: String,//DDL 2
    ddl3: String,//DDL 3
    interview: String,//面试 （两种：有-参加时间，无，）
    videoEssay: String, // videoEssay(三种：无，申请前完成，申请后完成)
    link: String, //链接
    applyAccount:String,//申请账号
    applyPassword:String,//申请用密码
    recommNumber:String,//需要推荐信数量
    other:String,
    level:String,// 存放可能性（四种：正常，不可能，冲刺，保底）
  ){
    const school: School = {
      _id: null,
      userAccount:userAccount,//学生id
        state: state, //申请状态（四种：进行，完成，收到offer，收到拒信）
        univName: univName,//大学名称
        schoolName: schoolName,//学院名称
        majorName: majorName,//专业名称
        ddl1: ddl1,//DDL 1
        ddl2: ddl2,//DDL 2
        ddl3: ddl3,//DDL 3
        interview: interview,//面试 （两种：有-参加时间，无，）
        videoEssay: videoEssay, // videoEssay(三种：无，申请前完成，申请后完成)
        link: link, //链接
        applyAccount:applyAccount,//申请账号
        applyPassword:applyPassword,//申请用密码
        recommNumber:recommNumber,//推荐信数量
        other:other,
        level:level,// 存放可能性（四种：正常，不可能，冲刺，保底）
    };
    this.http.post('http://localhost:3000/schooladd', school).subscribe((responseData) =>{
        this.schoolS.push(school);
        this.schoolsUpdated.next([...this.schoolS]);
    });
  }

  
}