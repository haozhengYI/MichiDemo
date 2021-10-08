import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HmService } from '../hm.service';
import {HotelM} from '../hm.model';
import { HttpClient } from '@angular/common/http';
import {Student} from '../st.model';
import {School} from '../school.model';
import {Recommender} from '../recom.model';
import {Notif} from '../notif.model';
import{NotifService} from '../notif.service';
import { NgForm } from '@angular/forms';
import {Education} from '../education.model';
import {Experience} from '../experience.model';

@Component({
  selector: 'app-hmstudent',
  templateUrl: './hmstudent.component.html',
  styleUrls: ['./hmstudent.component.scss']
})
export class HmstudentComponent implements OnInit {

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
  //教育背景信息
  educations : Education[] = [];
  education : Education[] = [];
  //工作背景信息
  experiences : Experience[] = [];
  experience : Experience[] = [];
  //通知信息
  notifs: Notif[] = [];
  notif : Notif;
  
  //school 信息
  schools: School[] = [];
  //推荐人信息
  recommenders : Recommender[] = [];
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
       });
       console.log("学生 ID 为+"+this.studentID);
    }
  
    addNotif(form: NgForm){//
       let content = (document.getElementById("exampleTextarea") as HTMLInputElement).value;
       //console.log(content);
      this.notifService.addNotif("",this.studentID, content, 
         form.value.ddl1,"未读",form.value.type);
      alert("发送通知成功!!" );  
    }


  ngOnInit() {
    this.http.get<{hotels: HotelM[]}>('/api/hotels').subscribe((Data) => {
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
    this.http.get<{students: Student[]}>('/api/students').subscribe((Data) => {
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
    //展示 此学生 教育背景信息
    this.http.get<{educations: Education[]}>('/api/educations/').subscribe((Data) => {
      this.educations = Data.educations;
          for(let y of this.educations){
            if(y.userAccount=== this.studentID){
              this.education.push(y);
            }
          }
          console.log("学生的教育背景"+this.education);    
      });
    //展示 此学生 工作背景信息
    this.http.get<{experiences: Experience[]}>('/api/experiences/').subscribe((Data) => {
      this.experiences = Data.experiences;
          for(let i of this.experiences){
            if(i.userAccount=== this.studentID){
              this.experience.push(i);
            }
          }
          console.log("学生的工作背景"+this.experience);    
      });
    //展示 此学生 选校信息
    this.http.get<{schools: School[]}>('/api/studentschooldetail/' + this.studentID).subscribe((orderData) => {
          console.log(orderData);
          this.schools = orderData.schools;
      });
    //展示 此学生 推荐人信息
    this.http.get<{recommenders: Recommender[]}>('/api/studentrecommenderdetail/' + this.studentID).subscribe((orderData) => {
      console.log(orderData);
      this.recommenders = orderData.recommenders;
    });    
    
    //展示 此学生通知信息
    this.http.get<{notifs: Notif[]}>('/api/notifdetail/' + this.studentID).subscribe((o) => {
      console.log(o);
      this.notifs = o.notifs;
    });   
      
    this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe((hotels: HotelM[]) => {
      this.hotels = hotels;
      });
  }
  //教育经历修改
  deleteE(e){
    console.log(e._id);
    this.http.delete('/api/education/'+ e._id).subscribe((oooData) => {     
        window.location.reload();
    });
  }
  //工作经历修改
  deleteEx(ex){
    console.log(ex._id);
    this.http.delete('/api/experience/'+ ex._id).subscribe((oooData) => {     
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
  
  //direct to the 推荐人更多信息 page
  studentrec(k) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : this.managerID,
       "studentID" : this.student._id,
       "recommenderID" : k._id,
      }
    };
    this.router.navigate(['/hmstudentrec'], navigationExtras);
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
