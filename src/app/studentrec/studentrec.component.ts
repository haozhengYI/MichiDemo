import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StService } from '../st.service';
import {Student} from '../st.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,  NavigationExtras,Router } from '@angular/router';
import {School} from '../school.model';
import {Recommender} from '../recom.model';

@Component({
  selector: 'app-studentrec',
  templateUrl: './studentrec.component.html',
  styleUrls: ['./studentrec.component.scss']
})
export class StudentrecComponent implements OnInit {
  students: Student[] = [];
  student : Student;

  studentUserAcc : any;
  studentID : any;
  //school 信息
  schools: School[] = [];
  school: School[] = [];
  //推荐人信息
  recommenders : Recommender[] = [];
  private stSub: Subscription;

  constructor(
    public stService: StService,
    private http: HttpClient,
    private route: ActivatedRoute, 
    private router: Router,
    ) { 
      this.route.queryParams.subscribe(params => {
        this.studentUserAcc = params["studentUserAcc"];
        this.studentID= params["studentID"];
       });
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
        this.studentID = this.student._id;
        console.log("学生id为"+this.studentID);

    });
    //展示 此学生 选校信息
    this.http.get<{schools: School[]}>('http://localhost:3000/schools/').subscribe((orderData) => {
      this.schools = orderData.schools;
      console.log(this.studentID)
          for(let x of this.schools){
            if(x.userAccount=== this.studentID){
              this.school.push(x);
              //console.log(this.school);
            }
          }
          console.log(this.school);    
      });

    //展示 此学生 推荐人信息
    this.http.get<{recommenders: Recommender[]}>('http://localhost:3000/studentrecommenderdetail/' + this.studentID).subscribe((orderData) => {
      console.log(orderData);
      this.recommenders = orderData.recommenders;
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

  ngOnDestroy() {
    this.stSub.unsubscribe();
  }
}
