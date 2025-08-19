import {Order} from '../hotel/order.model';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HmService } from '../hm.service';
import {HotelM} from '../hm.model';
import { HttpClient } from '@angular/common/http';
import {School} from '../school.model';
import {Student} from '../st.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-hmordersearch',
  templateUrl: './hmordersearch.component.html',
  styleUrls: ['./hmordersearch.component.scss']
})
export class HmordersearchComponent implements OnInit {

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
        this.studentID = params["studentID"];
       });
       console.log("管理员ID+"+this.managerID);
       console.log("学生ID+"+this.studentID);
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
            if(st._id === this.studentID){
              this.studentName = st.firstName + " " + st.lastName;
            }
          }
      });

      
      //展示 此学生 选校信息
    this.http.get<{schools: School[]}>('http://localhost:3000/studentschooldetail/' + this.studentID).subscribe((orderData) => {
      console.log("此学生选校列表");
      console.log(orderData);
      this.school = orderData.schools;
      for(let sc of this.school){
        for(let test of this.student){
          if(sc.userAccount=== test._id ){//替换列表里面的名字
            let studentName = test.firstName + " " + test.lastName;
            sc.userAccount =studentName;
            //console.log("此时变量为" +sc.userAccount + test.firstName);
          }
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
