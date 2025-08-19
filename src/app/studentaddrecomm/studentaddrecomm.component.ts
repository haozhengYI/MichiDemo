import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StService } from '../st.service';
import {Student} from '../st.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,  NavigationExtras,Router } from '@angular/router';
import {RecommenderService} from '../recom.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-studentaddrecomm',
  templateUrl: './studentaddrecomm.component.html',
  styleUrls: ['./studentaddrecomm.component.scss']
})
export class StudentaddrecommComponent implements OnInit {
  students: Student[] = [];
  student : Student;
  
  studentUserAcc : any;
  studentID : any;

  private stSub: Subscription;

  constructor(
    public stService: StService,
    private http: HttpClient,
    private route: ActivatedRoute, 
    public recommenderService :RecommenderService,
    private router: Router,
    ) { 
      this.route.queryParams.subscribe(params => {
        this.studentUserAcc = params["studentUserAcc"];
        this.studentID = params["studentID"];
        //console.log("学生ID" + this.studentID);
       });
    }
  
    addschool(form: NgForm){
      //this.ngOnInit();
      
      this.recommenderService.addRecommender("", this.studentID,form.value.firstName, form.value.lastName, form.value.email,
        form.value.phone, form.value.title, form.value.location, form.value.gender, form.value.education, form.value.organization,
         form.value.duration, form.value.position,form.value.relation,form.value.other );
        alert("添加推荐人成功!!");
        //console.log("推荐信" + form.value.firstName);
        const navigationExtras: NavigationExtras = {
          queryParams: {
           "studentUserAcc" : this.studentUserAcc,
           "studentID" : this.studentID,
          }
        };
        this.router.navigate(['/studentmain'], navigationExtras);
    } 

  ngOnInit() {
    this.http.get<{students: Student[]}>('http://localhost:3000/students').subscribe((Data) => {
        
        this.students = Data.students;
        for(let h of this.students){
            if(h.userAccount===this.studentUserAcc){
              this.student = h;
              console.log("此学生为"+this.student.lastName);
            }
        }

    });
  

    this.stSub = this.stService.getstudentsUpdatedListener().subscribe((students: Student[]) => {
    this.students = students;
    });
  }
  //direct to the student main page
  studentmain(student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "studentUserAcc" : student.userAccount,
       "studentID" : this.studentID,
      }
    };
    this.router.navigate(['/studentmain'], navigationExtras);
  }


  //direct to the 添加推荐人 page
  addRecom(student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "studentUserAcc" : student.userAccount,
       "studentID" : student._id,
       
      }
    };
    this.router.navigate(['/studentaddrecomm'], navigationExtras);
  }

    //direct to the 更新个人信息 page
    info(student) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
         "studentUserAcc" : student.userAccount,
         "studentID" : student._id,
        }
      };
      this.router.navigate(['/studentinfo'], navigationExtras);
    }

  //direct to the 推荐人信息 page
  rec(student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "studentUserAcc" : student.userAccount,
       "studentID" : student._id,
      }
    };
    this.router.navigate(['/studentrec'], navigationExtras);
  }

  //direct to the 简历信息 page
  resume(student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "studentUserAcc" : student.userAccount,
       "studentID" : this.studentID,
      }
    };
    this.router.navigate(['/studentresume'], navigationExtras);
  }

    //direct to the 面试题库 page   
    studentinterview(student) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
         "studentUserAcc" : student.userAccount,
         "studentID" : this.studentID,
        }
      };
      this.router.navigate(['/studentinterview'], navigationExtras);
    }
  
      //direct to the 贡献题库 page   
      studentaddinte(student) {
        const navigationExtras: NavigationExtras = {
          queryParams: {
           "studentUserAcc" : student.userAccount,
           "studentID" : this.studentID,
          }
        };
        this.router.navigate(['/studentaddinte'], navigationExtras);
      }

  ngOnDestroy() {
    this.stSub.unsubscribe();
  }
}
