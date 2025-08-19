import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StService } from '../st.service';
import {Student} from '../st.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,  NavigationExtras,Router } from '@angular/router';
import {School} from '../school.model';
import {Recommender} from '../recom.model';
import { Interview } from '../interview.model';

@Component({
  selector: 'app-studentinterview',
  templateUrl: './studentinterview.component.html',
  styleUrls: ['./studentinterview.component.scss']
})
export class StudentinterviewComponent implements OnInit {
  students: Student[] = [];
  student : Student;

  studentUserAcc : any;
  studentID : any;
  //school 信息
  schools: School[] = [];
  school: School[] = [];
  //推荐人信息
  recommenders : Recommender[] = [];

  interviews: Interview[] = [];
  interview : Interview;

  // 筛选相关的属性
  filteredInterviews: Interview[] = [];
  selectedCategory: string = '';
  selectedUniversity: string = '';
  selectedSchool: string = '';
  sortOrder: string = 'desc';
  searchTerm: string = '';
  
  // 唯一值数组
  uniqueCategories: string[] = [];
  uniqueUniversities: string[] = [];
  uniqueSchools: string[] = [];

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

   //获取面试题库 信息列表
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

    // 按搜索关键词筛选
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.interviewTitle.toString().toLowerCase().includes(searchLower) ||
        item.interviewUniv.toString().toLowerCase().includes(searchLower) ||
        item.interviewSchool.toString().toLowerCase().includes(searchLower) ||
        item.interviewProgram.toString().toLowerCase().includes(searchLower)
      );
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
    this.searchTerm = '';
    this.applyFilters();
  }

  // 获取Category的CSS类
  getCategoryClass(category: string): string {
    const categoryLower = category.toString().toLowerCase();
    if (categoryLower.includes('kira')) return 'category-kira';
    if (categoryLower.includes('personal')) return 'category-personal';
    if (categoryLower.includes('technical')) return 'category-technical';
    return 'category-default';
  }

  // 查看面试题目详情
  viewInterview(interview: Interview) {
    // 这里可以添加查看详情的逻辑，比如打开模态框或跳转到详情页
    console.log('查看面试题目:', interview);
    // 可以添加一个模态框来显示题目的详细信息
    alert(`题目详情：\n\n${interview.interviewTitle}\n\n大学：${interview.interviewUniv}\n学院：${interview.interviewSchool}\n项目：${interview.interviewProgram}\n\n建议准备时间：${interview.interviewDuration}`);
  }
}
