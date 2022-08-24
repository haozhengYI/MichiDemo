import {Order} from './../hotel/order.model';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HmService } from './../hm.service';
import {HotelM} from './../hm.model';
import { HttpClient } from '@angular/common/http';
import {School} from './../school.model';
import {Student} from './../st.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-hmorder',
  templateUrl: './hmorder.component.html',
  styleUrls: ['./hmorder.component.scss']
})
export class HmorderComponent implements OnInit {

  orders: Order[] = [];//all the orders from database
  order :Order[] = [];//the specific order selected by this hotel i
  hotels: HotelM[] = [];
  hotel : HotelM;
  managerID : any;
  hotelId: any;
  schools : School[]  =[];
  school : School[]  =[];
  students :Student[]=[];
  student : Student[]=[];
  st : Student;
  userAccount : any;
  studentID : any;//存放studentID
  studentName : any;
  private hotelMSub: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private http: HttpClient,
    public hmService: HmService) { 
      this.route.queryParams.subscribe(params => {
        this.managerID = params["managerID"];

       });
       console.log("管理员ID+"+this.managerID);
    }

    ngOnInit() {
      this.http.get<{hotels: HotelM[]}>('http://localhost:3000/hotels').subscribe((Data) => {
          this.hotels = Data.hotels;
          for(let h of this.hotels){
              if(h.userAccount===this.managerID){
                this.hotel = h;
              }
          }
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
            for(let test of this.student){
              if(sc.userAccount=== test._id ){//替换列表里面的名字
                let studentName = test.firstName + " " + test.lastName;
                sc.userAccount =studentName;
                //console.log("此时变量为" +sc.userAccount + test.firstName);
              }
            }
          this.school.push(sc);            
          }
      });
      
    
      this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe((hotels: HotelM[]) => {
        this.hotels = hotels;
        });
  }
  sele(form: NgForm){

    //console.log("输出"+st._id);
    let studentID = (document.getElementById("studName") as HTMLInputElement).value;
    console.log("输出学生ID为" + studentID);
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : this.hotel.userAccount,
       "studentID" : studentID,
      }
    };
    this.router.navigate(['/hmordersearch'], navigationExtras);

    // this.http.get<{schools: School[]}>('http://localhost:3000/studentschooldetail/'+temp0).subscribe((Data) => {
    //       this.schools = Data.schools;
    //       for(let school of this.schools){
    //         for(let test of this.student){
    //           if(school.userAccount=== test._id ){//替换列表里面的名字
    //             let studentName = test.firstName + " " + test.lastName;
    //             school.userAccount =studentName;
    //             console.log("此时变量为" +school.userAccount + test.firstName);
    //           }
    //         }
    //       //  this.school.push(school); 
    //        window.location.reload(); 
    //       }
    // });
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

  delete(s){
    console.log(s._id);
    this.http.delete('http://localhost:3000/schools/'+ s._id).subscribe((oooData) => {
        console.log("删除这个申请项目成功");
        window.location.reload();
    });
  }
  //direct to the school detail page
  hmschooldetail(s) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : this.managerID,
       "fullName" : s.userAccount,
       "schoolID"  : s._id,
      }
    };
    this.router.navigate(['/hmoschool'], navigationExtras);
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
