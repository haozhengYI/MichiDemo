import { Component, Input, OnInit } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { Subscription } from 'rxjs';
import { StService } from '../st.service';
import {Student} from '../st.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,  NavigationExtras,Router } from '@angular/router';
import {School} from '../school.model';
import {Notif} from '../notif.model';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-studentmain',
  templateUrl: './studentmain.component.html',
  styleUrls: ['./studentmain.component.scss']
})
export class StudentmainComponent implements OnInit {
  //日历部分
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    // {
    //   start: startOfDay(new Date("2021/10/31")),
    //   title: 'An event with no end date',
    //   color: colors.yellow,
    // },
  ];
  activeDayIsOpen: boolean = true;


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


    this.http.get<{students: Student[]}>('http://localhost:3000/students').subscribe((Data) => {
        
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
    this.http.get<{schools: School[]}>('http://localhost:3000/schools/').subscribe((orderData) => {
      this.schools = orderData.schools;
      console.log(this.studentID)
          for(let x of this.schools){
            if(x.userAccount=== this.studentID){
              this.school.push(x);
              //console.log(this.school);
            }
          }
          console.log(this.school);  
          for(let s of  this.school){
              if(s.state==="进行中"){
              if(s.ddl1 !=" "){
                let data = s.ddl1;
                let tit = " 【 "+ s.univName + "】 "+ s.majorName;
                let url= s._id;
                let fullName = s.userAccount;
                this.addEvent(tit,data);
              }  
              if(s.ddl2 !=" "){
                let data = s.ddl2;
                let tit = " 【 "+ s.univName + "】 "+ s.majorName;
                this.addEvent2(tit,data);
              }
              if(s.ddl3 !=" "){
                let data = s.ddl3;
                let tit =  " 【 "+ s.univName + "】 "+ s.majorName;
                this.addEvent3(tit,data);
              }
            }
          }  
      });

      //展示 此学生通知信息
    this.http.get<{notifs: Notif[]}>('http://localhost:3000/notifdetail/' + this.studentID).subscribe((o) => {
      
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
    this.http.put('http://localhost:3000/notif/' + n._id, Notif)
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
  addEvent(tit,data){
    this.events = [
      ...this.events,
      {
        title: tit,
        start: startOfDay(new Date(data)),
        color: colors.red,
      },
    ];
  }
  addEvent2(tit,data){
    this.events = [
      ...this.events,
      {
        title: tit,
        start: startOfDay(new Date(data)),
        color: colors.yellow,
      },
    ];
  }
  addEvent3(tit,data){
    this.events = [
      ...this.events,
      {
        title: tit,
        start: startOfDay(new Date(data)),
        color: colors.blue,
      },
    ];
  }
  setView(view: CalendarView) {
    this.view = view;
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
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
