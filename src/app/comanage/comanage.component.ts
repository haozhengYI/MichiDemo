import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HmService } from './../hm.service';
import {HotelM} from './../hm.model';
import { HttpClient } from '@angular/common/http';
import {Student} from './../st.model';

@Component({
  selector: 'app-comanage',
  templateUrl: './comanage.component.html',
  styleUrls: ['./comanage.component.scss']
})
export class ComanageComponent implements OnInit {

  students: Student[] = [];//all the orders from database
  student :Student[] = [];//2022学生
  student2 :Student[] = []; // 2021级学生人数
  hotels: HotelM[] = [];
  hotel : HotelM;
  managerID : any;
  name: String;
  location:String;
  phone:String;
  price:String;
  private hotelMSub: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private http: HttpClient,
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
              this.name=this.hotel.name;
              this.location = this.hotel.location;
              this.phone=this.hotel.phone;
              this.price = this.hotel.price;
              //console.log("管理员信息");
              //console.log(this.hotel);
            }
        }
    });
        // select the particular order by hotel id
        this.http.get<{students: Student[]}>('http://localhost:3000/students').subscribe((oData) => {
          this.students = (oData.students || []).filter(st => this.belongsToThisCoordinator(st));
          console.log("当前协调员学生信息");
          console.log(this.students);
          for(var i=this.students.length-1;i>=0;i--){
            this.student.push(this.students[i]);
          }
        });
      
    this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe((hotels: HotelM[]) => {
      this.hotels = hotels;
      });
  }
  belongsToThisCoordinator(student: Student): boolean {
    if (!student || !student.coordinator || !this.managerID) {
      return false;
    }
    return student.coordinator.toString().trim() === this.managerID.toString().trim();
  }

  //update hotel information like price or other
  updateProfile()
  {
    console.log("Inside Update")
    const Hotel = {
      userAccount:this.hotel.userAccount,
      firstName: this.hotel.firstName,
      lastName: this.hotel.lastName,
      email: this.hotel.email,
      phone: this.phone,
      name: this.name,
      location: this.location,
      image: this.hotel.image,
      price: this.price,
    }
    console.log(Hotel.price+"ddddd"+Hotel.userAccount);
    this.http.put('http://localhost:3000/hotels/' + this.hotel.userAccount, Hotel)
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
      const navigationExtras: NavigationExtras = {
        queryParams: {
         "managerID" : this.hotel.userAccount,
        }
      };
      //console.log("hahah"+hotel.userAccount);
      this.router.navigate(['/hmmodifypasssucc'], navigationExtras);
  }

  //direct to the hotel manage page
  hotelman(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
      }
    };
    this.router.navigate(['/comanage'], navigationExtras);
  }
 

  //direct to the hotel manager main page
  main(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
      }
    };
    this.router.navigate(['/coordmain'], navigationExtras);
  }

  //direct to the hotel order 
  hmorder(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
      }
    };
    this.router.navigate(['/coorder'], navigationExtras);
  }
  
 

  more(o){
    console.log(o._id);
    console.log(this.managerID);
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : this.managerID,
       "studentID" : o._id,
      }
    };
    this.router.navigate(['/costudent'], navigationExtras);
    
  }

  ngOnDestroy() {
    this.hotelMSub.unsubscribe();
  }
}
