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
  selector: 'app-hmmain',
  templateUrl: './hmmain.component.html',
  styleUrls: ['./hmmain.component.scss']
})
export class HMmainComponent implements OnInit {
  hotels: HotelM[] = [];
  hotel : HotelM;

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
        console.log("happy"+this.hotel.email);
    });

    this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe((hotels: HotelM[]) => {
    this.hotels = hotels;
    });

    this.http.get<{students: Student[]}>('http://localhost:3000/students/').subscribe((Data) => {
          this.students = Data.students;
          console.log(this.students);
          for(let st of this.students){  
            this.student.push(st) ;
          }
      });

      this.http.get<{schools: School[]}>('http://localhost:3000/schools').subscribe((Data) => {
          this.schools = Data.schools;
          for(let sc of this.schools){
            if(sc.state==="进行中"){ //筛选原始school列表中 状态为进行中的数组
              for(let test of this.student){
                if(sc.userAccount=== test._id ){//替换列表里面的名字
                  let studentName = test.firstName + " " + test.lastName;
                  sc.userAccount =studentName;
                  //console.log("此时变量为" +sc.userAccount + test.firstName);
                }
              }
              this.school.push(sc); //输出新数组
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

  ngOnDestroy() {
    this.hotelMSub.unsubscribe();
  }
}
