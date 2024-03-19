import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StService } from '../st.service';
import {Student} from '../st.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,  NavigationExtras,Router } from '@angular/router';
import {School} from '../school.model';
import {Recomletter} from '../recletter.model';
import {Statement} from '../statement.model';

@Component({
  selector: 'app-studentschool',
  templateUrl: './studentschool.component.html',
  styleUrls: ['./studentschool.component.scss']
})
export class StudentschoolComponent implements OnInit {
  students: Student[] = [];
  student : Student;

  studentUserAcc : any;
  studentID : any;
  //school 信息
  schools: School[] = [];
  school: School; //页面显示的具体项目
  schoolID  : any;//存选中的school ID
  
    //school 信息
  
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
    recommNumber:String;//推荐信数量
    other:String;  
    gre:String;
  //推荐信信息
  recomletters : Recomletter[] = [];
  recomletter : Recomletter;
  //文书信息
  statements : Statement[] = [];

  private stSub: Subscription;

  constructor(
    public stService: StService,
    private http: HttpClient,
    private route: ActivatedRoute, 
    private router: Router,
    ) { 
      this.route.queryParams.subscribe(params => {
        this.studentUserAcc = params["studentUserAcc"];
        this.studentID= params["studentID"];
        this.schoolID= params["schoolID"];
       });
    }
    

  ngOnInit() {


    this.http.get<{students: Student[]}>('http://localhost:3000/students').subscribe((Data) => {
        
        this.students = Data.students;
        for(let h of this.students){
            if(h.userAccount===this.studentUserAcc){
              this.student = h;
              console.log("此学生为"+this.student.lastName);
            }
        }
        // this.studentID = this.student._id;
        console.log("学生id为"+this.studentID);

    });

     //展示 申请项目的详细信息
    this.http.get<{schools: School[]}>('http://localhost:3000/schools').subscribe((Data) => {
          //console.log(orderData);
          this.schools = Data.schools;
          for(let s of this.schools){
            if(s._id===this.schoolID){
              //console.log("进入了吗");
              this.school  = s;
              this.state = this.school.state; //申请状态（四种：进行，完成，收到offer，收到拒信）
              this.univName= this.school.univName;//大学名称
              this.schoolName= this.school.schoolName;//学院名称
              this.majorName= this.school.majorName;//专业名称
              this.ddl1= this.school.ddl1;//DDL 1
              this.ddl2= this.school.ddl2;//DDL 2
              this.ddl3= this.school.ddl3//DDL 3
              this.interview= this.school.interview;//面试 （两种：有-参加时间，无，）
              this.videoEssay= this.school.videoEssay;// videoEssay(三种：无，申请前完成，申请后完成)
              this.link= this.school.link//链接
              this.applyAccount= this.school.applyAccount;//申请账号
              this.applyPassword= this.school.applyPassword;//申请用密码
              this.recommNumber= this.school.recommNumber;//推荐信数量
              this.other= this.school.other;
              this.gre=this.school.gre;
            }
        }
      });
    //展示 这个选校的 推荐信 信息
    this.http.get<{recomletters: Recomletter[]}>('http://localhost:3000/schoolrecomletterlist/' + this.schoolID).subscribe((Data) => {
      //console.log(Data);
      this.recomletters = Data.recomletters;
    }); 
    
    //展示 这个选校的 文书 信息
    this.http.get<{statements: Statement[]}>('http://localhost:3000/statementdetail/' + this.schoolID).subscribe((Data) => {
      //console.log(Data);
      this.statements = Data.statements;
    }); 
 


    this.stSub = this.stService.getstudentsUpdatedListener().subscribe((students: Student[]) => {
    this.students = students;
    });
  }

  //direct to the student main page
  studentmain(student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "studentUserAcc" : student.userAccount,
       "studentID" : this.studentID,
      }
    };
    this.router.navigate(['/studentmain'], navigationExtras);
  }
  
  //direct to the 添加推荐人 page
  addRecom(student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "studentUserAcc" : student.userAccount,
       "studentID" : student._id,
      }
    };
    this.router.navigate(['/studentaddrecomm'], navigationExtras);
  }
  //direct to the 更新个人信息 page
  info(student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "studentUserAcc" : student.userAccount,
       "studentID" : student._id,
      }
    };
    this.router.navigate(['/studentinfo'], navigationExtras);
  }

  //direct to the 推荐人信息 page
  rec(student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "studentUserAcc" : student.userAccount,
       "studentID" : student._id,
      }
    };
    this.router.navigate(['/studentrec'], navigationExtras);
  }

  //direct to the 简历信息 page
  resume(student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "studentUserAcc" : student.userAccount,
       "studentID" : this.studentID,
      }
    };
    this.router.navigate(['/studentresume'], navigationExtras);
  }

  ngOnDestroy() {
    this.stSub.unsubscribe();
  }
}
