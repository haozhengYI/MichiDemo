import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HmService } from '../hm.service';
import {HotelM} from '../hm.model';
import { HttpClient } from '@angular/common/http';
import {Student} from '../st.model';
//import {School} from '../school.model';
import {SchoolService} from '../school.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-hmaddschool',
  templateUrl: './hmaddschool.component.html',
  styleUrls: ['./hmaddschool.component.scss']
})
export class HmaddschoolComponent implements OnInit {

  students: Student[] = [];//all the students from database
  student :Student;//the specific student selected by id

  hotels: HotelM[] = [];
  hotel : HotelM;
  managerID : any;
  studentID : any;//存选中的student ID
  //hotel个人信息
  name: String;
  location:String;
  phone:String;
  price:String;
  //student个人信息
  // Slocation:String;
  // Sname: String;
  //school信息
  University ="";
  Uschool ="";
  major ="";
  ddl1 ="";
  ddl2 ="";
  ddl3 ="";
  interview = "";
  videoessay = "";
  link ="";

  private hotelMSub: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private http: HttpClient,
    public schoolService :SchoolService,
    public hmService: HmService) { 
      this.route.queryParams.subscribe(params => {
        this.managerID = params["managerID"];
        this.studentID = params["studentID"];
       });
       console.log("学生 ID 为+"+this.studentID);
    }
  
    addschool(form: NgForm){//form内的信息使用过html中的name来获取的
      this.ngOnInit();
      //console.log("School名" + form.value.Uschool + "ddl1为" + form.value.ddl1 + "面试" + form.value.interview);
      this.schoolService.addSchool("", this.studentID,"进行中",form.value.University, form.value.Uschool, form.value.major,
        form.value.ddl1, form.value.ddl2, form.value.ddl3, form.value.interview, form.value.videoessay, form.value.link,
         form.value.applyAccount, form.value.applyPassword,form.value.recommNumber,"" );
        alert("Add School Seccuss!!");
        console.log("推荐信" + form.value.recommNumber);
        const navigationExtras: NavigationExtras = {
          queryParams: {
           "managerID" : this.managerID,
           "studentID" : this.studentID,
          }
        };
        this.router.navigate(['/hmstudent'], navigationExtras);
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
  //direct to the register page
  hmstudent(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
       "studentID" : this.studentID,
      }
    };
    this.router.navigate(['/hmstudent'], navigationExtras);
  }

  

  ngOnDestroy() {
    this.hotelMSub.unsubscribe();
  }
}
