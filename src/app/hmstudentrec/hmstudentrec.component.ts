import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HmService } from '../hm.service';
import {HotelM} from '../hm.model';
import { HttpClient } from '@angular/common/http';
import {Student} from '../st.model';
import {School} from '../school.model';
import {Recommender} from '../recom.model';
import {Recomletter} from '../recletter.model';
import {Notif} from '../notif.model';
import{NotifService} from '../notif.service';
import { NgForm } from '@angular/forms';
import {Education} from '../education.model';
import {Experience} from '../experience.model';

@Component({
  selector: 'app-hmstudentrec',
  templateUrl: './hmstudentrec.component.html',
  styleUrls: ['./hmstudentrec.component.scss']
})
export class HmstudentrecComponent implements OnInit {

  students: Student[] = [];//all the orders from database
  student :Student;//the specific order selected by this hotel i

  hotels: HotelM[] = [];
  hotel : HotelM;
  managerID : any;
  studentID : any;//存选中的student ID
  //hotel个人信息
  name: String;
  location:String;
  phone:String;
  price:String;
  
  
  //school 信息
  schools: School[] = [];
  //推荐人信息
  recommenderID : String;
  recommenders : Recommender[] = [];
  recommender : Recommender;
  //推荐信信息
  recomletters : Recomletter[] = [];


  private hotelMSub: Subscription;
  

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private http: HttpClient,
    public notifService:NotifService,
    public hmService: HmService) { 
      this.route.queryParams.subscribe(params => {
        this.managerID = params["managerID"];
        this.studentID = params["studentID"];
        this.recommenderID = params["recommenderID"];
       });
       console.log("推荐人 ID 为+"+this.recommenderID);

    }
  


  ngOnInit() {
    this.http.get<{hotels: HotelM[]}>('http://localhost:3000/hotels').subscribe((Data) => {
        this.hotels = Data.hotels;
        for(let h of this.hotels){
            if(h.userAccount===this.managerID){
              this.hotel = h;
              this.name=this.hotel.name;
              this.location = this.hotel.location;
              this.phone=this.hotel.phone;
              this.price = this.hotel.price;
              console.log("管理者信息");
              console.log(this.hotel);
            }
        }
    });
    //展示 学生个人信息
    this.http.get<{students: Student[]}>('http://localhost:3000/students').subscribe((Data) => {
        this.students = Data.students;
        for(let h of this.students){
            if(h._id===this.studentID){
              this.student = h;
              //this.Sname=this.student.name;
              //this.Slocation = this.student.location;
              console.log("Student Personal Information");
              console.log(this.student);
            }
        }
    });


    //展示 此学生 推荐人特定信息
    this.http.get<{recommenders: Recommender[]}>('http://localhost:3000/recommenders').subscribe((Data) => {
        this.recommenders = Data.recommenders;
        for(let r of this.recommenders){
            if(r._id===this.recommenderID){
              this.recommender = r;
              //this.Sname=this.student.name;
              //this.Slocation = this.student.location;
              console.log("推荐人 Personal Information");
              console.log(this.recommender);
            }
        }
    });
    //获取 包含此推荐人的所有推荐信
    this.http.get<{recomletters: Recomletter[]}>('http://localhost:3000/recomletters').subscribe((Data) => {
        for(let rl of Data.recomletters){
            if(rl.recommender===this.recommenderID){
              this.recomletters.push(rl);
            }
        }
        console.log("推荐信列表");
        console.log(this.recomletters);
    });
    //展示 此学生 选校信息
    this.http.get<{schools: School[]}>('http://localhost:3000/studentschooldetail/' + this.studentID).subscribe((orderData) => {
          console.log("学生全部列表");
          console.log(orderData.schools);
          for(let os of orderData.schools){
            for(let rl of this.recomletters){
              if(rl.schoolID===os._id){
                os.state =rl.state;
                this.schools.push(os);
              }
            }
          }
          console.log("学生新列表");
          console.log(this.schools); 

     });
   
    
      
    this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe((hotels: HotelM[]) => {
      this.hotels = hotels;
      });
  }
  //教育经历修改
  deleteE(e){
    console.log(e._id);
    this.http.delete('http://localhost:3000/education/'+ e._id).subscribe((oooData) => {     
        window.location.reload();
    });
  }
  //工作经历修改
  deleteEx(ex){
    console.log(ex._id);
    this.http.delete('http://localhost:3000/experience/'+ ex._id).subscribe((oooData) => {     
        window.location.reload();
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
    this.router.navigate(['/hmcomp'], navigationExtras);
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

  //direct to the addschool page
  hmaddschool(hotel,student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
       "studentID" : this.student._id,
      }
    };
    this.router.navigate(['/hmaddschool'], navigationExtras);
  }
  //direct to the school detail page
  hmschooldetail(s) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : this.managerID,
       "studentID" : this.studentID,
       "schoolID"  : s._id,
      }
    };
    this.router.navigate(['/hmschool'], navigationExtras);
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
