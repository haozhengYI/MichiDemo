import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PAGE_I18N, PageLang } from './applymaster.page-i18n';
import { BlockingProxy } from 'blocking-proxy';
import { UserService } from '../user.service';
import { ConstantPool } from '@angular/compiler';
import { user } from '../user.model';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getDefaultService } from 'selenium-webdriver/opera';
import { userInfo } from 'os';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import {HmService} from './../hm.service';
import {Student} from '../../app/st.model';

@Component({
  selector: 'app-applymaster',
  templateUrl: './applymaster.component.html',
  styleUrls: ['./applymaster.component.scss']
})
export class ApplymasterComponent implements OnInit {
  
  user: user[] = [];
  students: Student[] = [];
  studentID : any;

  /** Graduate service accordion (Steps 1–3); synced with EXPAND ALL */
  gradServiceStepsOpen = [false, false, false];

  /** Page copy language (floating toggle). Default English. */
  pageLang: PageLang = 'en';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    public hmService: HmService,
    private http: HttpClient,
    private sanitizer: DomSanitizer) { }

  txt(key: string): string {
    const row = PAGE_I18N[key];
    return row ? row[this.pageLang] : key;
  }

  html(key: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.txt(key));
  }

  togglePageLang(): void {
    this.pageLang = this.pageLang === 'zh' ? 'en' : 'zh';
  }

   
  
  
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

  get gradServicesAllExpanded(): boolean {
    return this.gradServiceStepsOpen[0] && this.gradServiceStepsOpen[1] &&
      this.gradServiceStepsOpen[2];
  }

  toggleGradServiceStep(index: number): void {
    this.gradServiceStepsOpen[index] = !this.gradServiceStepsOpen[index];
  }

  toggleGradServicesExpandAll(): void {
    if (this.gradServicesAllExpanded) {
      this.gradServiceStepsOpen = [false, false, false];
    } else {
      this.gradServiceStepsOpen = [true, true, true];
    }
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
