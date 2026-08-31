import { Component, Input, OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
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
import { HmService } from './../hm.service';
import {HotelM} from './../hm.model';
import { HttpClient } from '@angular/common/http';
import {School} from './../school.model';
import {Student} from './../st.model';
import {Task} from  '../task.model';
import { TaskService } from '../task.service';
import { ActivatedRoute,  NavigationExtras,Router } from '@angular/router';

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
  selector: 'app-coordmain',
  templateUrl: './coordmain.component.html',
  styleUrls: ['./coordmain.component.scss']
})
export class CoordmainComponent implements OnInit {
  hotels: HotelM[] = [];
  hotel : HotelM;
  //进度信息
  tasks: Task[] = [];
  task : Task;
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

  managerID : any;
  schools : School[]  =[];
  school : School[]  =[];
  students :Student[]=[];
  student : Student[]=[];

  private hotelMSub: Subscription;


  constructor(
    public hmService: HmService,
    private http: HttpClient,
    private route: ActivatedRoute, 
    private router: Router,
    ) { 
      this.route.queryParams.subscribe(params => {
        this.managerID = params["managerID"];
        //console.log(this.managerID);
       });
    }
    

  ngOnInit() {
    this.http.get<{hotels: HotelM[]}>('http://localhost:3000/hotels').subscribe((Data) => {
        //console.log(Data);
        this.hotels = Data.hotels;
        //console.log(this.hotels[0].email);
        for(let h of this.hotels){
            if(h.userAccount===this.managerID){
              this.hotel = h;
              console.log("管理者信息"+this.hotel);
            }
        }
        //this.hotel = this.hotels[0];
        if (this.hotel) {
          console.log("happy"+this.hotel.email);
        } else {
          console.warn("No hotel/manager profile found for", this.managerID);
        }
    });


    this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe((hotels: HotelM[]) => {
    this.hotels = hotels;
    });

        //展示 此学生进度信息
        this.http.get<{tasks: Task[]}>('http://localhost:3000/tasks').subscribe((o) => {
          //console.log("测试"+ o[1]);
          //this.tasks = o.tasks;
          for(var i=o.tasks.length-1;i>=0;i--){
            this.tasks.push(o.tasks[i]);
          }
          //console.log("测试2"+this.tasks[1].tstate);
        });

    this.http.get<{students: Student[]}>('http://localhost:3000/students/').subscribe((Data) => {
          this.students = (Data.students || []).filter(st => this.belongsToThisCoordinator(st));
          this.student = [...this.students];
          console.log("当前协调员学生:", this.students);

          this.http.get<{schools: School[]}>('http://localhost:3000/schools').subscribe((schoolData) => {
              this.schools = schoolData.schools;
              for(let sc of this.schools){
                if(sc.state==="进行中"){ //筛选原始school列表中 状态为进行中的数组
                  const matched = this.student.find(test =>
                    test._id && sc.userAccount &&
                    sc.userAccount.toString() === test._id.toString()
                  );
                  if (matched) {
                    sc.userAccount = matched.firstName + " " + matched.lastName;
                    this.school.push(sc); // 只保留当前协调员名下学生的申请
                  }
                }
              }
              console.log("新选校列表为" + this.school.length);

              for(let s of  this.school){
                if(s.ddl1 !=" "){
                  let data = s.ddl1;
                  let tit = s.userAccount+ " 【 "+ s.univName + "】 "+ s.majorName;
                  let url= s._id;
                  let fullName = s.userAccount;
                  this.addEvent(tit,data,url,fullName);
                }
                if(s.ddl2 !=" "){
                  let data = s.ddl2;
                  let tit = s.userAccount+ " 【 "+ s.univName + "】 "+ s.majorName;
                  let url= s._id;
                  let fullName = s.userAccount;
                  this.addEvent2(tit,data,url,fullName);
                }
                if(s.ddl3 !=" "){
                  let data = s.ddl3;
                  let tit = s.userAccount+ " 【 "+ s.univName + "】 "+ s.majorName;
                  let url= s._id;
                  let fullName = s.userAccount;
                  this.addEvent3(tit,data,url,fullName);
                }
              }
          });
      });

  }
  
  belongsToThisCoordinator(student: Student): boolean {
    if (!student || !student.coordinator || !this.managerID) {
      return false;
    }
    return student.coordinator.toString().trim() === this.managerID.toString().trim();
  }

  addEvent(tit,data,url,fullName){
    this.events = [
      ...this.events,
      {
        title: tit,
        start: startOfDay(new Date(data)),
        color: colors.red,
        id:url,
        meta:fullName,
      },
    ];
  }
  addEvent2(tit,data,url,fullName){
    this.events = [
      ...this.events,
      {
        title: tit,
        start: startOfDay(new Date(data)),
        color: colors.yellow,
        id:url,
        meta:fullName,
      },
    ];
  }
  addEvent3(tit,data,url,fullName){
    this.events = [
      ...this.events,
      {
        title: tit,
        start: startOfDay(new Date(data)),
        color: colors.blue,
        id:url,
        meta:fullName,
      },
    ];
  }

  setView(view: CalendarView) {
    this.view = view;
  }
  handleEvent(action: string, event: CalendarEvent): void {
    console.log("输出测试" + event.meta);
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : this.managerID,
       "fullName" : event.meta,
       "schoolID"  : event.id,
      }
    };
    this.router.navigate(['/hmoschool'], navigationExtras);

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

  update(n){
    const Task = {
      userAccount:n.userAccount,//学生的id
      studentname:n.studentname,//学生名字
      assigned:n.assigned,// 被Assigned人信息
      content: n.content,//存储通知内容
      tdate:n.tdate,//通知日期
      tstate:"完成",//通知状态（"未读/已读"）
      ttype:n.ttype,//通知类型（"紧急/一般/比较紧急"）
    }
    this.http.put('http://localhost:3000/task/' + n._id, Task)
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
      alert("已完成该进度");
      window.location.reload();  
  }

  
    //direct to the hotel manage page
    hotelman(hotel) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
         "managerID" : hotel.userAccount,
        }
      };
      this.router.navigate(['/comanage'], navigationExtras);
    }

  //direct to the hotel manager main page
  main(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
      }
    };
    this.router.navigate(['/coordmain'], navigationExtras);
  }

  //direct to the hotel order 
  hmorder(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
      }
    };
    this.router.navigate(['/coorder'], navigationExtras);
  }



  ngOnDestroy() {
    this.hotelMSub.unsubscribe();
  }
}
