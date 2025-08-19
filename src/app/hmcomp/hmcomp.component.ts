import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HmService } from './../hm.service';
import {HotelM} from './../hm.model';
import { HttpClient } from '@angular/common/http';
import { HotelService } from '../hotel/hotel.service';
import {Task} from  '../task.model';
import { TaskService } from '../task.service';
import { ActivatedRoute,  NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-hmcomp',
  templateUrl: './hmcomp.component.html',
  styleUrls: ['./hmcomp.component.scss']
})
export class HmcompComponent implements OnInit {

  hotels: HotelM[] = [];
  hotel : HotelM;
  managerID : any;
  firstName: String;
  lastName:String;
  email:String;
  image:String;
    //进度信息
    tasks: Task[] = [];
    task : Task;
  private hotelMSub: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private http: HttpClient,
    public taskService:TaskService,
    public hmService: HmService) { 
      this.route.queryParams.subscribe(params => {
        this.managerID = params["managerID"];
       });
       console.log("constructor+"+this.managerID);
    }

  ngOnInit() {

    this.http.get<{hotels: HotelM[]}>('http://localhost:3000/hotels').subscribe((Data) => {
        this.hotels = Data.hotels;
        for(let h of this.hotels){
            if(h.userAccount===this.managerID){
              this.hotel = h;
              this.firstName=this.hotel.firstName;
              this.lastName = this.hotel.lastName;
              this.email=this.hotel.email;
              this.image = this.hotel.image;
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
