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
import{InterviewService} from '../interview.service';
import { Interview } from '../interview.model';

@Component({
  selector: 'app-hmqbankmanag',
  templateUrl: './hmqbankmanag.component.html',
  styleUrls: ['./hmqbankmanag.component.scss']
})
export class HmqbankmanagComponent implements OnInit {

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


  interviews: Interview[] = [];
  interview : Interview;

  // 筛选相关的属性
  filteredInterviews: Interview[] = [];
  selectedCategory: string = '';
  selectedUniversity: string = '';
  selectedSchool: string = '';
  sortOrder: string = 'desc';
  
  // 唯一值数组
  uniqueCategories: string[] = [];
  uniqueUniversities: string[] = [];
  uniqueSchools: string[] = [];
  
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

          //获取interviews 信息列表
      this.http.get<{interviews: Interview[]}>('http://localhost:3000/interviews').subscribe((Data) => {
      //this.blogs = Data.blogs;
      for(var i=Data.interviews.length-1;i>=0;i--){
        this.interviews.push(Data.interviews[i]);
      }
      //this.blogNum = this.blogs.length;
      //console.log("Blog数组的长度为" + this.blogNum);
      console.log(this.interviews);
      
      // 初始化筛选数据
      this.initializeFilters();
      this.applyFilters();
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
  
  delete(i){
    console.log(i._id);
    this.http.delete('http://localhost:3000/interview/'+ i._id).subscribe((oooData) => {
        console.log("删除这个面试问题成功");
        window.location.reload();
    });
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



  // 初始化筛选选项
  initializeFilters() {
    // 获取唯一的Category值
    this.uniqueCategories = Array.from(new Set(this.interviews.map(item => item.interviewCato.toString())));
    
    // 获取唯一的University值
    this.uniqueUniversities = Array.from(new Set(this.interviews.map(item => item.interviewUniv.toString())));
    
    // 获取唯一的School值
    this.uniqueSchools = Array.from(new Set(this.interviews.map(item => item.interviewSchool.toString())));
  }

  // 应用筛选和排序
  applyFilters() {
    let filtered = this.interviews.slice();

    // 按Category筛选
    if (this.selectedCategory) {
      filtered = filtered.filter(item => item.interviewCato.toString() === this.selectedCategory);
    }

    // 按University筛选
    if (this.selectedUniversity) {
      filtered = filtered.filter(item => item.interviewUniv.toString() === this.selectedUniversity);
    }

    // 按School筛选
    if (this.selectedSchool) {
      filtered = filtered.filter(item => item.interviewSchool.toString() === this.selectedSchool);
    }

    // 按时间排序
    if (this.sortOrder === 'desc') {
      filtered.sort((a, b) => new Date(b.interviewTime.toString()).getTime() - new Date(a.interviewTime.toString()).getTime());
    } else {
      filtered.sort((a, b) => new Date(a.interviewTime.toString()).getTime() - new Date(b.interviewTime.toString()).getTime());
    }

    this.filteredInterviews = filtered;
  }

  // 清除所有筛选
  clearFilters() {
    this.selectedCategory = '';
    this.selectedUniversity = '';
    this.selectedSchool = '';
    this.sortOrder = 'desc';
    this.applyFilters();
  }


  ngOnDestroy() {
    this.hotelMSub.unsubscribe();
  }

}
