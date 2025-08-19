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
import {HotelM} from '../hm.model';
import { Blog} from '../blog.model';
import { NgForm } from '@angular/forms';
import{BlogService} from '../blog.service';

import{InterviewService} from '../interview.service';
import { Interview } from '../interview.model';

@Component({
  selector: 'app-hminterview',
  templateUrl: './hminterview.component.html',
  styleUrls: ['./hminterview.component.scss']
})
export class HminterviewComponent implements OnInit {
  user: user[] = [];
  hotels: HotelM[] = [];
  hotel : HotelM;
  blogs: Blog[] = [];
  blog :Blog;
  blogNum  : any;
  interviews: Interview[] = [];
  interview : Interview;

  managerID : any;
  name: String;
  location:String;
  phone:String;
  price:String;
  private hotelMSub: Subscription;

  // private usersSub: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    private http: HttpClient,
    public  stService :StService,
    public blogService:BlogService,
    public interviewService: InterviewService,
    public hmService: HmService) { 
      this.route.queryParams.subscribe(params => {
        this.managerID = params["managerID"];
       });
       console.log("constructor+"+this.managerID);
    }
    
    addinterview(form: NgForm){//form内的信息使用过html中的name来获取的
      //this.blogNum = this.blogs.length+1;
      
      //console.log("blog" + form.value.blogTitle + "数组长度" + this.blogNum);
      //console.log("School名" + form.value.Uschool + "ddl1为" + form.value.ddl1 + "面试" + form.value.interview);
      this.interviewService.addInterview("", form.value.interviewUniv,form.value.interviewSchool,form.value.interviewProgram,form.value.interviewTitle, form.value.interviewCato, form.value.interviewTime,"admin", form.value.interviewDuration, form.value.interviewOther,
     );
      alert("Add Interview Seccuss!!");
        
      window.location.reload();  
    } 
  

  ngOnInit() {
    this.http.get<{user: user[]}>('http://localhost:3000/users').subscribe((userData) => {

    this.user = userData.user;
    console.log(userData.user);
    //console.log(this.user.length);

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
    //获取Blog 信息列表
    this.http.get<{interviews: Interview[]}>('http://localhost:3000/interviews').subscribe((Data) => {
        //this.blogs = Data.blogs;
        for(var i=Data.interviews.length-1;i>=0;i--){
          this.interviews.push(Data.interviews[i]);
        }
        //this.blogNum = this.blogs.length;
        //console.log("Blog数组的长度为" + this.blogNum);
        console.log(this.interviews);
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

  //direct to the register page
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

    //direct to the interview page
    hmqbankmanag(hotel) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
         "managerID" : hotel.userAccount,
        }
      };
      this.router.navigate(['/hmqbankmanag'], navigationExtras);
    }
  


  ngOnDestroy() {
    this.hotelMSub.unsubscribe();
  }

}
