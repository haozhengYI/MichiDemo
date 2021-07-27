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
import {HotelM} from './../hm.model';
import { Student} from './../st.model';

@Component({
  selector: 'app-hmregister',
  templateUrl: './hmregister.component.html',
  styleUrls: ['./hmregister.component.scss']
})
export class HmregisterComponent implements OnInit {
  user: user[] = [];
  hotels: HotelM[] = [];
  hotel : HotelM;
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
    public hmService: HmService) { 
      this.route.queryParams.subscribe(params => {
        this.managerID = params["managerID"];
       });
       console.log("constructor+"+this.managerID);
    }
    
    
  tutorialmessage(){
    alert("Your user account should be in email form and your password should contain numbers and alphabets.");
  }
  //When leave this page, set all elements to default value
  setdefault(){
    (document.getElementById("hint4") as HTMLInputElement).style.display="none";
    (document.getElementById("option-student") as HTMLInputElement).checked=false;
    (document.getElementById("option-manager") as HTMLInputElement).checked=false;
    (document.getElementById("user-password") as HTMLInputElement).value=null;
    (document.getElementById("user-account") as HTMLInputElement).value=null;
    (document.getElementById("confirm-password") as HTMLInputElement).value=null;
    (document.getElementById("user-password") as HTMLInputElement).style.borderColor="black";
    (document.getElementById("user-account") as HTMLInputElement).style.borderColor="black";
    (document.getElementById("confirm-password") as HTMLInputElement).style.borderColor="black";
  }

  check(){
    this.ngOnInit();
    this.user = this.user;
    //Getting value from HTML element
    let temp0 = (document.getElementById("user-account") as HTMLInputElement).value;
    let temp1 = (document.getElementById("user-password") as HTMLInputElement).value;
    let temp2 = (document.getElementById("confirm-password") as HTMLInputElement).value;
    let temp3 = document.getElementById("option-student") as HTMLInputElement;
    let temp4 = document.getElementById("option-manager") as HTMLInputElement;
    let temp8 = document.getElementById("hint4") as HTMLInputElement;
    var re1 = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");//Regex for user account
    var re2 = new RegExp("^[a-zA-Z0-9-]+$");
    //Check if there are empty fields
    if(temp0==""||temp1==""||temp2==""){
      (document.getElementById("user-account") as HTMLInputElement).style.borderColor="red";
      (document.getElementById("user-password") as HTMLInputElement).style.borderColor="red";
      (document.getElementById("confirm-password") as HTMLInputElement).style.borderColor="red";
      temp8.style.display="inline-block";
      temp3.checked=false;
      temp4.checked=false;
      alert("Please enter all fields.");
      return;
    }
    //Check have user chosen any role
    if(temp3.checked==false&&temp4.checked==false){
      (document.getElementById("user-account") as HTMLInputElement).style.borderColor="black";
      (document.getElementById("user-password") as HTMLInputElement).style.borderColor="black";
      (document.getElementById("confirm-password") as HTMLInputElement).style.borderColor="black";
      temp8.style.display="inline-block";
      alert("Please choose a role.");
      return;
    }
    //Check if two passwords are the same
    if(temp1!=temp2){
      (document.getElementById("user-password") as HTMLInputElement).style.borderColor="red";
      (document.getElementById("confirm-password") as HTMLInputElement).style.borderColor="red";
      temp8.style.display="none";
      (document.getElementById("user-account") as HTMLInputElement).style.borderColor="black";
      (document.getElementById("user-password") as HTMLInputElement).value = null;
      (document.getElementById("confirm-password") as HTMLInputElement).value = null;
      alert("Two passwords should be the same.");
      return;
    }
    //Check user account regex
    if(!temp0.match(re1)){
        alert("Your user account should be in email form.");
        (document.getElementById("user-account") as HTMLInputElement).style.borderColor="red";
        (document.getElementById("user-password") as HTMLInputElement).style.borderColor="black";
        (document.getElementById("confirm-password") as HTMLInputElement).style.borderColor="black";
        temp8.style.display="none";
        return;
    }
    //Check password regex
    if(!temp1.match(re2)){
        alert("Your password should contain numbers and alphabets.");
        (document.getElementById("user-account") as HTMLInputElement).style.borderColor="black";
        (document.getElementById("user-password") as HTMLInputElement).style.borderColor="red";
        (document.getElementById("confirm-password") as HTMLInputElement).style.borderColor="black";
        temp8.style.display="none";
        return;
    }
    //If all field are success, check if the account already exist
    else{
      //this.ngOnInit();
      for(var indexc=0;indexc<this.user.length;indexc++){
      if(temp0==this.user[indexc].UserAccount){
        alert("This account has already been registered.");
        (document.getElementById("user-password") as HTMLInputElement).value=null;
        (document.getElementById("user-account") as HTMLInputElement).value=null;
        (document.getElementById("confirm-password") as HTMLInputElement).value=null;
        (document.getElementById("user-account") as HTMLInputElement).style.borderColor="red";
        (document.getElementById("confirm-password") as HTMLInputElement).style.borderColor="black";
        (document.getElementById("user-password") as HTMLInputElement).style.borderColor="black";
        temp8.style.display="none";
        temp3.checked=false;
        temp4.checked=false;
        return;
      }else{
        continue;
      }
    }
    if(indexc==this.user.length){
      let temp16;
      if(temp3.checked==true){
        console.log("nmb");
        temp16="student";
        //create one resp in students database
        console.log(temp0);
        this.stService.addStudent("",temp0,"", "", "","",  "", "", "","","",  "", "", "","","",  "", "", "","","",  "", "", "",
        "","",  "", "", "","","",  "", "", "","","",  "", "", "","","",  "", "","","",  "", "", "","","",  "", "", "","","",  "", 
        "", "","","",  "", "", "","","","","");
        //共64个属性
      }if(temp4.checked==true){
        temp16="manager";
        //create one resp in hotels database
        console.log(temp0);
        this.hmService.addHotel("",temp0,"", "", "","",  "", "", "", "");
      }
      (document.getElementById("user-account") as HTMLInputElement).style.borderColor="black";
      (document.getElementById("user-password") as HTMLInputElement).style.borderColor="black";
      (document.getElementById("confirm-password") as HTMLInputElement).style.borderColor="black";
      temp8.style.display="none";
      alert("Seccuss!!");

      (document.getElementById("user-password") as HTMLInputElement).value=null;
      (document.getElementById("user-account") as HTMLInputElement).value=null;
      (document.getElementById("confirm-password") as HTMLInputElement).value=null;
      temp3.checked=false;
      temp4.checked=false;
      this.userService.addUser(temp0,temp1,temp16);
      //this.ngOnInit();
      window.location.reload();
    }
  }
  }




  ngOnInit() {
    this.http.get<{user: user[]}>('/api/users').subscribe((userData) => {

    this.user = userData.user;
    console.log(userData.user);
    console.log(this.user.length);

    });
    //获取HotelM 信息列表
    this.http.get<{hotels: HotelM[]}>('/api/hotels').subscribe((Data) => {
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
