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
