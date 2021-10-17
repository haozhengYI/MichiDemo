import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StService } from '../st.service';
import {Student} from '../st.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,  NavigationExtras,Router } from '@angular/router';
import {School} from '../school.model';
import {Notif} from '../notif.model';

@Component({
  selector: 'app-studentmain',
  templateUrl: './studentmain.component.html',
  styleUrls: ['./studentmain.component.scss']
})
export class StudentmainComponent implements OnInit {
  students: Student[] = [];
  student : Student;

  studentUserAcc : any;
  studentID : any;
  //school 信息
  schools: School[] = [];
  school: School[] = [];

  notifs: Notif[] = [];
  notif: Notif[] = [];
  private stSub: Subscription;

  constructor(
    public stService: StService,
    private http: HttpClient,
    private route: ActivatedRoute, 
    private router: Router,
    ) { 
      this.route.queryParams.subscribe(params => {
        this.studentUserAcc = params["studentUserAcc"];
        this.studentID = params["studentID"];
       });
    }
    

  ngOnInit() {


    this.http.get<{students: Student[]}>('/api/students').subscribe((Data) => {
        
        this.students = Data.students;
        for(let h of this.students){
            if(h.userAccount===this.studentUserAcc){
              this.student = h;
              console.log("此学生为"+this.student.lastName);
            }
        }
        //this.studentID = this.student._id;
        console.log("学生id为"+this.studentID);

    });
    //展示 此学生 选校信息
    this.http.get<{schools: School[]}>('/api/schools/').subscribe((orderData) => {
      this.schools = orderData.schools;
      console.log(this.studentID)
          for(let x of this.schools){
            if(x.userAccount=== this.studentID){
              this.school.push(x);
              //console.log(this.school);
            }
          }
          console.log(this.school);    
      });

      //展示 此学生通知信息
    this.http.get<{notifs: Notif[]}>('/api/notifdetail/' + this.studentID).subscribe((o) => {
      
      this.notif = o.notifs;
      for(let n of this.notif){
        if(n.userAccount=== this.studentID){
          this.notifs.push(n);
          //console.log(this.school);
        }
      }

    });   

 


    this.stSub = this.stService.getstudentsUpdatedListener().subscribe((students: Student[]) => {
    this.students = students;
    });
  }
  updateNotif(n){
    const Notif = {
      userAccount:n.userAccount,//学生的id
      content: n.content,//存储通知内容
      ndate:n.ndate,//通知日期
      nstate:"已读",//通知状态（"未读/已读"）
      ntype:n.ntype,//通知类型（"紧急/一般/比较紧急"）
    }
    this.http.put('/api/notif/' + n._id, Notif)
      .subscribe((data) => {
        const options = {
          overlay: true,
          overlayClickToClose: true,
          showCloseButton: true,
          duration: 5000
        };
        if (data[0] === undefined) {
          console.log("Undefine");
        }
      })
      alert("已读这条通知");
      window.location.reload();  
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

  //direct to the school detail page
  schooldetail(k) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "studentUserAcc" : this.student.userAccount,
       "studentID" : this.student._id,
       "schoolID"  : k._id,
      }
    };
    this.router.navigate(['/studentschool'], navigationExtras);
  }

  ngOnDestroy() {
    this.stSub.unsubscribe();
  }
}
