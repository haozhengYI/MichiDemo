import { Component, OnInit } from '@angular/core';
import { BlockingProxy } from 'blocking-proxy';
import { UserService } from '../user.service';
import { ConstantPool } from '@angular/compiler';
import { user } from '../user.model';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getDefaultService } from 'selenium-webdriver/opera';
import { userInfo } from 'os';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import {HmService} from '../hm.service';
import {StService } from '../st.service';
import {Task} from  '../task.model';
import { TaskService } from '../task.service';
import {HotelM} from './../hm.model';
import { Student} from './../st.model';
import {School} from './../school.model';

@Component({
  selector: 'app-hmtask',
  templateUrl: './hmtask.component.html',
  styleUrls: ['./hmtask.component.scss']
})
export class HmtaskComponent implements OnInit {
  user: user[] = [];
  hotels: HotelM[] = [];
  hotel : HotelM;
  managerID : any;
  name: String;
  location:String;
  phone:String;
  price:String;
  //进度信息
  tasks: Task[] = [];
  task : Task;
  students: Student[] = [];
  interviewReminders: {
    studentID: any;
    schoolID: any;
    studentName: string;
    programInfo: string;
    typeLabel: string;
    deadline: string;
    reminderDate: string;
    status: string;
  }[] = [];
  dueSoonReminders: {
    studentID: any;
    schoolID: any;
    studentName: string;
    programInfo: string;
    typeLabel: string;
    deadline: string;
    reminderDate: string;
    status: string;
  }[] = [];
  overdueReminders: {
    studentID: any;
    schoolID: any;
    studentName: string;
    programInfo: string;
    typeLabel: string;
    deadline: string;
    reminderDate: string;
    status: string;
  }[] = [];
  
  private hotelMSub: Subscription;

  // private usersSub: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    private http: HttpClient,
    public  stService :StService,
    public hmService: HmService) { 
      this.route.queryParams.subscribe(params => {
        this.managerID = params["managerID"];
       });
       console.log("constructor+"+this.managerID);
    }
    
    
    


  ngOnInit() {
    this.http.get<{user: user[]}>('http://localhost:3000/users').subscribe((userData) => {

    this.user = userData.user;
    console.log(userData.user);
    console.log(this.user.length);

    });
    //获取HotelM 信息列表
    this.http.get<{hotels: HotelM[]}>('http://localhost:3000/hotels').subscribe((Data) => {
        this.hotels = Data.hotels;
        for(let h of this.hotels){
            if(h.userAccount===this.managerID){
              this.hotel = h;
              this.name=this.hotel.name;
              this.location = this.hotel.location;
              this.phone=this.hotel.phone;
              this.price = this.hotel.price;
              console.log("ngOnInIT");
              console.log(this.hotel);
            }
        }
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

        this.loadInterviewReminders();
    
    this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe((hotels: HotelM[]) => {
      this.hotels = hotels;
      });
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

  loadInterviewReminders() {
    this.http.get<{students: Student[]}>('http://localhost:3000/students').subscribe((studentData) => {
      this.students = studentData.students;
      this.http.get<{schools: School[]}>('http://localhost:3000/schools').subscribe((schoolData) => {
        const reminders = [];
        const today = this.startOfDay(new Date());

        for (let s of schoolData.schools) {
          if (!s.state || s.state.toString() !== '进行中') {
            continue;
          }
          if (!this.hasInterviewOrVideoEssay(s)) {
            continue;
          }

          const student = this.findStudentById(s.userAccount);
          const studentName = student ? (student.firstName + ' ' + student.lastName) : '';
          const programParts = [];
          if (s.univName) { programParts.push(s.univName.toString()); }
          if (s.schoolName) { programParts.push(s.schoolName.toString()); }
          if (s.majorName) { programParts.push(s.majorName.toString()); }
          const programInfo = programParts.join(' · ');
          const typeLabel = this.buildTypeLabel(s);
          const deadlines = [s.ddl1, s.ddl2, s.ddl3];

          for (let i = 0; i < deadlines.length; i++) {
            const deadlineDate = this.parseDate(deadlines[i]);
            if (!deadlineDate) {
              continue;
            }
            const reminderDate = this.addDays(deadlineDate, -21);
            // 提前3周开始显示提醒；项目仍为进行中时，过期 deadline 也继续显示
            if (today.getTime() < this.startOfDay(reminderDate).getTime()) {
              continue;
            }
            let status = 'due-soon';
            if (today.getTime() > this.startOfDay(deadlineDate).getTime()) {
              status = 'overdue';
            }
            reminders.push({
              studentID: s.userAccount,
              schoolID: s._id,
              studentName: studentName,
              programInfo: programInfo,
              typeLabel: typeLabel + ' · DDL' + (i + 1),
              deadline: this.formatDate(deadlineDate),
              reminderDate: this.formatDate(reminderDate),
              status: status
            });
          }
        }

        reminders.sort(function(a, b) {
          if (a.status === 'overdue' && b.status !== 'overdue') { return -1; }
          if (a.status !== 'overdue' && b.status === 'overdue') { return 1; }
          return a.deadline < b.deadline ? -1 : (a.deadline > b.deadline ? 1 : 0);
        });
        this.interviewReminders = reminders;
        this.dueSoonReminders = reminders.filter(function(r) {
          return r.status === 'due-soon';
        });
        this.overdueReminders = reminders.filter(function(r) {
          return r.status === 'overdue';
        });
      });
    });
  }

  hasInterviewOrVideoEssay(school: School) {
    const interview = school.interview ? school.interview.toString() : '';
    const videoEssay = school.videoEssay ? school.videoEssay.toString() : '';
    const hasInterview = interview === 'yes' || interview.indexOf('有') !== -1;
    const hasVideo = videoEssay.indexOf('有') !== -1;
    return hasInterview || hasVideo;
  }

  buildTypeLabel(school: School) {
    const interview = school.interview ? school.interview.toString() : '';
    const videoEssay = school.videoEssay ? school.videoEssay.toString() : '';
    const hasInterview = interview === 'yes' || interview.indexOf('有') !== -1;
    const hasVideo = videoEssay.indexOf('有') !== -1;
    if (hasInterview && hasVideo) {
      return '有面试 + Video Essay';
    }
    if (hasInterview) {
      return '有面试';
    }
    return videoEssay || '有 Video Essay';
  }

  findStudentById(studentId) {
    if (!studentId) {
      return null;
    }
    for (let st of this.students) {
      if (st._id === studentId) {
        return st;
      }
    }
    return null;
  }

  parseDate(value) {
    if (!value) {
      return null;
    }
    const text = value.toString().trim();
    if (!text || text === ' ') {
      return null;
    }
    const dashParts = text.split('T')[0].split('-');
    if (dashParts.length === 3) {
      const year = Number(dashParts[0]);
      const month = Number(dashParts[1]);
      const day = Number(dashParts[2]);
      if (!year || !month || !day) {
        return null;
      }
      return new Date(year, month - 1, day);
    }
    const parsed = new Date(text);
    if (isNaN(parsed.getTime())) {
      return null;
    }
    return parsed;
  }

  addDays(date: Date, days: number) {
    const result = new Date(date.getTime());
    result.setDate(result.getDate() + days);
    return result;
  }

  startOfDay(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  formatDate(date: Date) {
    const month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
    const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    return date.getFullYear() + '-' + month + '-' + day;
  }

  openInterviewReminder(reminder) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : this.managerID,
       "studentID" : reminder.studentID,
       "schoolID"  : reminder.schoolID,
      }
    };
    this.router.navigate(['/hmschool'], navigationExtras);
  }



  //direct to the hotel manage page
  hotelman(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
      }
    };
    this.router.navigate(['/hmmanage'], navigationExtras);
  }
  //direct to the modify password page
  modifyP(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
      }
    };
    this.router.navigate(['/hmmodifypass'], navigationExtras);
  }

  //direct to the complete information page
  comp(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
      }
    };
    this.router.navigate(['/hmtask'], navigationExtras);
  }


  //direct to the hotel manager main page
  main(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
      }
    };
    this.router.navigate(['/hmmain'], navigationExtras);
  }

  //direct to the hotel order 
  hmorder(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,

      }
    };
    this.router.navigate(['/hmorder'], navigationExtras);
  }

  //direct to the register page
  hmregister(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
      }
    };
    this.router.navigate(['/hmregister'], navigationExtras);
  }

  //direct to the blog page
  hmblog(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
      }
    };
    this.router.navigate(['/hmblog'], navigationExtras);
  }

    //direct to the interview page
    hminterview(hotel) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
         "managerID" : hotel.userAccount,
        }
      };
      this.router.navigate(['/hminterview'], navigationExtras);
    }
  
  
  

  ngOnDestroy() {
    this.hotelMSub.unsubscribe();
  }

}
