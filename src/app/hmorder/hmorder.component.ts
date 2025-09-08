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

  // 新增的筛选相关属性
  uniqueYears: string[] = [];
  selectedYear: string = '';
  selectedRequirement: string = '';
  selectedStatus: string = '';
  selectedStudent: string = '';
  filteredApplications: School[] = [];

  // 统计相关属性
  universityStats: any[] = [];
  showModal: boolean = false; // 添加模态框显示控制

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
          console.log('学生数据:', this.students);
          for(let st of this.students){  
            this.student.push(st) ;
          }
          // 初始化学年数据
          this.initializeYears();
      });

      this.http.get<{schools: School[]}>('http://localhost:3000/schools').subscribe((Data) => {
          this.schools = Data.schools;
          console.log('申请数据:', this.schools);
          // 不修改原始数据，保持userAccount为ID
          for(let sc of this.schools){
            this.school.push(sc);            
          }
          // 初始化筛选
          this.initializeFilters();
      });
      
      this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe((hotels: HotelM[]) => {
        this.hotels = hotels;
        });
  }

  // 初始化学年数据
  initializeYears() {
    // 过滤掉无效的学年数据，只保留数字格式的学年
    this.uniqueYears = Array.from(new Set(this.students.map(student => student.year.toString())))
      .filter(year => {
        // 只保留看起来像年份的数据（4位数字或包含数字的字符串）
        return /^\d{4}.*$/.test(year) || /^\d{2}.*$/.test(year);
      })
      .filter(year => !year.includes('测试') && !year.includes('账号')); // 过滤掉包含"测试"或"账号"的学年
    
    this.uniqueYears.sort((a, b) => b.localeCompare(a)); // 按学年倒序排列
    if (this.uniqueYears.length > 0) {
      this.selectedYear = this.uniqueYears[0]; // 默认选择第一个学年
    }
    console.log('初始化的学年:', this.uniqueYears);
  }

  // 初始化筛选
  initializeFilters() {
    this.applyFilters();
  }

  // 选择学年
  selectYear(year: string) {
    this.selectedYear = year;
    this.applyFilters();
  }

  // 获取指定学年的申请数量
  getYearApplicationCount(year: string): number {
    if (!this.school || this.school.length === 0) {
      return 0;
    }
    
    return this.school.filter(app => {
      // 通过ID匹配学生
      const student = this.students.find(st => st._id.toString() === app.userAccount.toString());
      return student && student.year.toString() === year;
    }).length;
  }

  // 获取当前学年的所有申请
  getCurrentYearApplications(): School[] {
    if (!this.school || this.school.length === 0) {
      return [];
    }
    
    return this.school.filter(app => {
      // 通过ID匹配学生
      const student = this.students.find(st => st._id.toString() === app.userAccount.toString());
      return student && student.year.toString() === this.selectedYear;
    });
  }

  // 获取当前学年的所有学生
  getCurrentYearStudents(): Student[] {
    return this.students.filter(student => student.year.toString() === this.selectedYear);
  }

  // 应用筛选
  applyFilters() {
    let filtered = this.getCurrentYearApplications();

    console.log('筛选前的申请数量:', filtered.length);
    console.log('当前筛选条件:', {
      requirement: this.selectedRequirement,
      status: this.selectedStatus,
      student: this.selectedStudent
    });

    // 按申请要求筛选
    if (this.selectedRequirement) {
      if (this.selectedRequirement === 'interview') {
        filtered = filtered.filter(app => {
          const hasInterview = app.interview && 
            (app.interview.toString().toLowerCase() === 'yes' || 
             app.interview.toString().toLowerCase() === '有' ||
             app.interview.toString().toLowerCase() === 'true');
          console.log('面试筛选:', app.interview, '结果:', hasInterview);
          return hasInterview;
        });
      } else if (this.selectedRequirement === 'videoEssay') {
        // 筛选所有有Video Essay的申请（不管是申请前还是申请后）
        filtered = filtered.filter(app => {
          const hasVideoEssay = app.videoEssay && 
            (app.videoEssay.toString().includes('有') || 
             app.videoEssay.toString().toLowerCase().includes('yes') ||
             app.videoEssay.toString().toLowerCase().includes('true'));
          console.log('Video Essay筛选:', app.videoEssay, '结果:', hasVideoEssay);
          return hasVideoEssay;
        });
      } else if (this.selectedRequirement === 'videoEssayBefore') {
        // 筛选申请前需要Video Essay的申请
        filtered = filtered.filter(app => {
          const hasVideoEssayBefore = app.videoEssay && 
            app.videoEssay.toString().includes('在提交申请前');
          console.log('Video Essay(申请前)筛选:', app.videoEssay, '结果:', hasVideoEssayBefore);
          return hasVideoEssayBefore;
        });
      } else if (this.selectedRequirement === 'videoEssayAfter') {
        // 筛选申请后需要Video Essay的申请
        filtered = filtered.filter(app => {
          const hasVideoEssayAfter = app.videoEssay && 
            app.videoEssay.toString().includes('在提交申请后');
          console.log('Video Essay(申请后)筛选:', app.videoEssay, '结果:', hasVideoEssayAfter);
          return hasVideoEssayAfter;
        });
      } else if (this.selectedRequirement === 'both') {
        filtered = filtered.filter(app => {
          const hasInterview = app.interview && 
            (app.interview.toString().toLowerCase() === 'yes' || 
             app.interview.toString().toLowerCase() === '有' ||
             app.interview.toString().toLowerCase() === 'true');
          const hasVideoEssay = app.videoEssay && 
            (app.videoEssay.toString().includes('有') || 
             app.videoEssay.toString().toLowerCase().includes('yes') ||
             app.videoEssay.toString().toLowerCase().includes('true'));
          return hasInterview && hasVideoEssay;
        });
      }
    }

    // 按状态筛选
    if (this.selectedStatus) {
      filtered = filtered.filter(app => app.state.toString() === this.selectedStatus);
    }

    // 按学生筛选
    if (this.selectedStudent) {
      filtered = filtered.filter(app => app.userAccount.toString() === this.selectedStudent);
    }

    this.filteredApplications = filtered;
    console.log('筛选后的申请数量:', this.filteredApplications.length);
    console.log('当前学年:', this.selectedYear);
  }

  // 清除所有筛选
  clearFilters() {
    this.selectedRequirement = '';
    this.selectedStatus = '';
    this.selectedStudent = '';
    this.applyFilters();
  }

  // 显示统计信息
  showStatistics() {
    console.log('开始显示统计信息...');
    try {
      this.calculateUniversityStats();
      this.showModal = true;
      console.log('统计计算完成，显示模态框');
    } catch (error) {
      console.error('统计计算出错:', error);
      alert('统计计算出错，请检查数据');
    }
  }

  // 计算大学统计信息
  calculateUniversityStats() {
    console.log('开始计算大学统计...');
    console.log('当前筛选的申请数量:', this.filteredApplications.length);
    
    if (!this.filteredApplications || this.filteredApplications.length === 0) {
      console.log('没有筛选的申请数据');
      this.universityStats = [];
      return;
    }

    const universityCount: { [key: string]: number } = {};
    
    // 统计每个大学的申请数量
    this.filteredApplications.forEach((app, index) => {
      try {
        const university = app.univName ? app.univName.toString() : '未知大学';
        universityCount[university] = (universityCount[university] || 0) + 1;
        console.log(`处理第${index + 1}个申请: ${university}`);
      } catch (error) {
        console.error(`处理第${index + 1}个申请时出错:`, error, app);
      }
    });

    console.log('大学统计结果:', universityCount);

    // 转换为数组并排序
    this.universityStats = Object.keys(universityCount).map(university => ({
      university: university,
      count: universityCount[university]
    })).sort((a, b) => b.count - a.count);

    // 计算百分比
    const totalCount = this.filteredApplications.length;
    this.universityStats.forEach(stat => {
      stat.percentage = totalCount > 0 ? (stat.count / totalCount) * 100 : 0;
    });

    console.log('最终统计结果:', this.universityStats);
  }

  // 关闭统计模态框
  closeStatisticsModal() {
    console.log('关闭统计模态框');
    this.showModal = false;
  }

  // 获取学生姓名
  getStudentName(studentId: string): string {
    if (!studentId) return '未知学生';
    
    const student = this.students.find(st => st._id.toString() === studentId.toString());
    if (student) {
      return `${student.firstName} ${student.lastName}`;
    } else {
      console.log('未找到学生:', studentId);
      console.log('所有学生ID:', this.students.map(s => s._id));
      return studentId; // 如果找不到学生，返回原始ID
    }
  }

  // 获取申请要求文本
  getRequirementText(requirement: string): string {
    const texts = {
      'interview': '需要面试',
      'videoEssay': '需要Video Essay',
      'videoEssayBefore': 'Video Essay(申请前)',
      'videoEssayAfter': 'Video Essay(申请后)',
      'both': '面试 + Video Essay'
    };
    return texts[requirement] || requirement;
  }

  // 获取状态样式类
  getStatusClass(state: string): string {
    const stateLower = state.toString().toLowerCase();
    if (stateLower.includes('完成')) return 'status-completed';
    if (stateLower.includes('进行')) return 'status-progress';
    if (stateLower.includes('offer')) return 'status-offer';
    if (stateLower.includes('拒信')) return 'status-rejected';
    return 'status-default';
  }

  // 获取面试要求样式类
  getInterviewClass(interview: string): string {
    if (!interview) return 'requirement-none';
    const interviewLower = interview.toString().toLowerCase();
    if (interviewLower === 'yes' || interviewLower === '有' || interviewLower === 'true') {
      return 'requirement-required';
    }
    return 'requirement-none';
  }

  // 获取Video Essay样式类
  getVideoEssayClass(videoEssay: string): string {
    if (!videoEssay) return 'requirement-none';
    const videoEssayStr = videoEssay.toString();
    if (videoEssayStr.includes('有')) {
      return 'requirement-required';
    }
    return 'requirement-none';
  }

  sele(form: NgForm){
    let studentID = (document.getElementById("studName") as HTMLInputElement).value;
    console.log("输出学生ID为" + studentID);
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : this.hotel.userAccount,
       "studentID" : studentID,
      }
    };
    this.router.navigate(['/hmordersearch'], navigationExtras);
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
    this.router.navigate(['/hmmain'], navigationExtras);
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
        // 从school数组中移除
        this.school = this.school.filter(app => app._id !== s._id);
        // 重新应用筛选
        this.applyFilters();
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
