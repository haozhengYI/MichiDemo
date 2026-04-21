import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import {Student} from '../st.model';
import { toggleStudentLoginPanel } from '../student-login-toggle';

@Component({
  selector: 'app-mainclass',
  templateUrl: './mainclass.component.html',
  styleUrls: ['./mainclass.component.scss']
})
export class MainclassComponent implements OnInit, AfterViewInit {
  /** Student login strip — explicit Bootstrap collapse (see student-login-toggle.ts). */
  toggleStudentLogin = toggleStudentLoginPanel;

  user: user[] = [];
  students: Student[] = [];
  studentID : any;

  @ViewChild('statsSection') statsSection: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    public hmService: HmService,
    private http: HttpClient) { }

   
  
  
  checklogin(){
    this.ngOnInit();
    this.user = this.user;
    this.studentID = this.studentID;
    //Check if there are empty fields
    let temp9 = (document.getElementById("login-user-account") as HTMLInputElement).value;
    let temp10 = (document.getElementById("login-user-password") as HTMLInputElement).value;
    if(temp9===""||temp10===""){
      alert("Please enter all fields.");
      (document.getElementById("login-user-account") as HTMLInputElement).value=null;
      (document.getElementById("login-user-password") as HTMLInputElement).value=null;
      return;
    }else{//See if the account exist
      console.log(this.user);
      for(var index = 0; index<this.user.length;index++){
        if(temp9==this.user[index].UserAccount){
          //alert("find");
          if(temp10==this.user[index].UserPassword){
          (document.getElementById("login-user-account") as HTMLInputElement).value=null;
          (document.getElementById("login-user-password") as HTMLInputElement).value=null;
          if(this.user[index].Role=="manager"){
          alert("Welcome "+this.user[index].Role+"!");
          //this.user.length = this.user.length+1;
          //window.open("/hmmain","_self");
          //direct to the hotel manager page
          console.log(this.user[index].UserAccount);
          const navigationExtras: NavigationExtras = {
            queryParams: {
             "managerID" : this.user[index].UserAccount,
            }
          };
          this.router.navigate(['/hmmain'], navigationExtras);
          return;
        }if(this.user[index].Role=="student"){
          alert("Welcome "+this.user[index].Role+"!");
          //console.log(this.user[index].UserAccount);
          // API_PATH + '/students'
          
          this.http.get<{students: Student[]}>('http://localhost:3000/students').subscribe((Data) => {
              this.students = Data.students;
              console.log(this.students);
              for(let h of this.students){
                  if(h.userAccount==this.user[index].UserAccount){
                    this.studentID = h._id;
                    console.log("此学生ID为"+this.studentID);
            
                    const NavigationExtras: NavigationExtras = {
                      queryParams: {
                        "studentUserAcc" : this.user[index].UserAccount,
                        "studentID" : this.studentID,
                      }
                    };
                    
                    this.router.navigate(['/studentmain'], NavigationExtras);
                  }
              }
              //console.log("学生id为"+this.studentID);

          });
          //console.log("学生id2为"+this.studentID);
         // this.user.length = this.user.length+1;
          // const NavigationExtras: NavigationExtras = {
          //   queryParams: {
          //     "studentUserAcc" : this.user[index].UserAccount,
          //   }
          // };
          // window.open("/hotels","_self");
          //this.router.navigate(['/studentmain'], NavigationExtras);
          return;
        }
        }else{
          (document.getElementById("login-user-password") as HTMLInputElement).value=null;
          alert("Your password is incorrect.");
          return;
        }
        }else{
          continue;
        }
      }if(index==this.user.length){
          console.log(index);
          alert("No such account.");
          (document.getElementById("login-user-account") as HTMLInputElement).value=null;
          (document.getElementById("login-user-password") as HTMLInputElement).value=null;
          return;
      }
    }
  }

  ngOnInit() {
    this.http.get<{user: user[]}>('http://localhost:3000/users').subscribe((userData) => {

    this.user = userData.user;
    console.log(userData.user);
    console.log(this.user.length);

    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.runStatCountAnimations(), 0);
  }

  private runStatCountAnimations(): void {
    if (!this.statsSection || !this.statsSection.nativeElement) {
      return;
    }
    const root = this.statsSection.nativeElement;
    const numerals = root.querySelectorAll('.stat_number-numeral[data-numeral]');
    numerals.forEach((node, index) => {
      const el = node as HTMLElement;
      const raw = el.getAttribute('data-numeral') || '0';
      const target = parseFloat(raw);
      if (Number.isNaN(target)) {
        return;
      }
      const delay = index * 45;
      window.setTimeout(() => this.animateNumeral(el, target), delay);
    });
  }

  /** Ease-out count from 0 to target (percent values), ~1.6s. */
  private animateNumeral(el: HTMLElement, target: number): void {
    const durationMs = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(target * eased);
      el.textContent = String(value);
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = String(Math.round(target));
      }
    };
    requestAnimationFrame(tick);
  }

  main() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       
      }
    };
    this.router.navigate(['/mainclass'], navigationExtras);
  }
  class() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       
      }
    };
    this.router.navigate(['/applybachelor'], navigationExtras);
  }
  
   //direct to the Blog page
   blog() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       
      }
    };
    this.router.navigate(['/career'], navigationExtras);
  }
  //direct to the 留学 page
  abroad() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       
      }
    };
    this.router.navigate(['/applymaster'], navigationExtras);
  }

}
