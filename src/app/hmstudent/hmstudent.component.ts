import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HmService } from '../hm.service';
import {HotelM} from '../hm.model';
import { HttpClient } from '@angular/common/http';
import {Student} from '../st.model';
import {School} from '../school.model';
import {Recommender} from '../recom.model';
import {Notif} from '../notif.model';
import{NotifService} from '../notif.service';
import {Task} from  '../task.model';
import { TaskService } from '../task.service';
import { NgForm } from '@angular/forms';
import {Education} from '../education.model';
import {Experience} from '../experience.model';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-hmstudent',
  templateUrl: './hmstudent.component.html',
  styleUrls: ['./hmstudent.component.scss']
})
export class HmstudentComponent implements OnInit {

  students: Student[] = [];//all the orders from database
  student :Student;//the specific order selected by this hotel i

  hotels: HotelM[] = [];
  hotel : HotelM;
  managerID : any;
  studentID : any;//存选中的student ID
  studentName: any;
  //hotel个人信息
  name: String;
  location:String;
  phone:String;
  price:String;
  //教育背景信息
  educations : Education[] = [];
  education : Education[] = [];
  //工作背景信息
  experiences : Experience[] = [];
  experience : Experience[] = [];
  //通知信息
  notifs: Notif[] = [];
  notif : Notif;
  //进度信息
  tasks: Task[] = [];
  task : Task;
  
  //school 信息
  schools: School[] = [];
  //推荐人信息
  recommenders : Recommender[] = [];
  private hotelMSub: Subscription;
  excelData = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private http: HttpClient,
    public notifService:NotifService,
    public taskService:TaskService,
    public hmService: HmService) { 
      this.route.queryParams.subscribe(params => {
        this.managerID = params["managerID"];
        this.studentID = params["studentID"];
       });
       console.log("学生 ID 为+"+this.studentID);
    }
  
    addNotif(form: NgForm){//
       let content = (document.getElementById("exampleTextarea") as HTMLInputElement).value;
       //console.log(content);
      this.notifService.addNotif("",this.studentID, content, 
         form.value.ddl1,"未读",form.value.type);
      alert("发送通知成功!!" );  
      window.location.reload();  
    }
    addTask(form: NgForm){//
      let cont = (document.getElementById("exampleText") as HTMLInputElement).value;
      console.log(cont + "负责人" + form.value.ttype);
     this.taskService.addTask("",this.studentID, this.studentName, form.value.ttype,cont, 
        form.value.tddl,"未完成","");
     alert("更新进度成功!!" );  
     window.location.reload();  
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
              console.log("管理者信息");
              console.log(this.hotel);
            }
        }
    });
    //展示 学生个人信息
    this.http.get<{students: Student[]}>('http://localhost:3000/students').subscribe((Data) => {
        this.students = Data.students;
        for(let h of this.students){
            if(h._id===this.studentID){
              this.student = h;
              this.studentName = this.student.firstName + " " + this.student.lastName;
              //this.Sname=this.student.name;
              //this.Slocation = this.student.location;
              console.log("Student Personal Information");
              console.log(this.student);
            }
        }
    });
    //展示 此学生 教育背景信息
    this.http.get<{educations: Education[]}>('http://localhost:3000/educations/').subscribe((Data) => {
      this.educations = Data.educations;
          for(let y of this.educations){
            if(y.userAccount=== this.studentID){
              this.education.push(y);
            }
          }
          console.log("学生的教育背景"+this.education);    
      });
    //展示 此学生 工作背景信息
    this.http.get<{experiences: Experience[]}>('http://localhost:3000/experiences/').subscribe((Data) => {
      this.experiences = Data.experiences;
          for(let i of this.experiences){
            if(i.userAccount=== this.studentID){
              this.experience.push(i);
            }
          }
          console.log("学生的工作背景"+this.experience);    
      });
    //展示 此学生 选校信息
    this.http.get<{schools: School[]}>('http://localhost:3000/studentschooldetail/' + this.studentID).subscribe((orderData) => {
          console.log(orderData);
          this.schools = orderData.schools;
      });
    //展示 此学生 推荐人信息
    this.http.get<{recommenders: Recommender[]}>('http://localhost:3000/studentrecommenderdetail/' + this.studentID).subscribe((orderData) => {
      console.log(orderData);
      this.recommenders = orderData.recommenders;
    });    
    
    //展示 此学生通知信息
    this.http.get<{notifs: Notif[]}>('http://localhost:3000/notifdetail/' + this.studentID).subscribe((o) => {
      console.log(o);
      this.notifs = o.notifs;
    });   
    //展示 此学生进度信息
     this.http.get<{tasks: Task[]}>('http://localhost:3000/taskdetail/' + this.studentID).subscribe((o) => {
      console.log(o);
      //this.tasks = o.tasks;
      for(var i=o.tasks.length-1;i>=0;i--){
        this.tasks.push(o.tasks[i]);
      }
    });  
      
    this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe((hotels: HotelM[]) => {
      this.hotels = hotels;
      });
  }
  //教育经历修改
  deleteE(e){
    console.log(e._id);
    this.http.delete('http://localhost:3000/education/'+ e._id).subscribe((oooData) => {     
        window.location.reload();
    });
  }
  //工作经历修改
  deleteEx(ex){
    console.log(ex._id);
    this.http.delete('http://localhost:3000/experience/'+ ex._id).subscribe((oooData) => {     
        window.location.reload();
    });
  }
  //推荐人删除
  deleteRD(k){
    console.log(k._id);
    this.http.delete('http://localhost:3000/recommenders/'+ k._id).subscribe((oooData) => {     
        window.location.reload();
    });
  }
  //更新学生年级信息
  updatePersonal(){
    const Student = {
        userAccount:this.student.userAccount,//学生account
        firstName: this.student.firstName,
        lastName: this.student.lastName,
        email: this.student.email,
        phone: this.student.phone,
        dob: this.student.dob, // 生日
        currentAddress: this.student.currentAddress,
        permanentAddress: this.student.permanentAddress,
        gender: this.student.gender,
        ssn: this.student.ssn,
        passport: this.student.passport,//护照或绿卡号码
        visa: this.student.visa,
        appEmail:this.student.appEmail,//申请所用的邮箱账号
        appPsw:this.student.appPsw,//申请所用的邮箱密码
        citizen:this.student.citizen,//国籍
        //标化成绩类
        TOEFL:this.student.TOEFL,
        TOEFLR:this.student.TOEFLR,//托福阅读
        TOEFLL:this.student.TOEFLL,//托福听力
        TOEFLS:this.student.TOEFLS,//托福口语
        TOEFLW:this.student.TOEFLW,//托福写作
        GRE: this.student.GRE,
        GREV: this.student.GREV,//GRE Verbal部分成绩
        GREVP: this.student.GMATVP,
        GREQ: this.student.GREQ,
        GREQP: this.student.GREQP,
        GREW: this.student.GREW,
        GREWP: this.student.GREWP,
        GMAT: this.student.GMAT,//GMAT 部分
        GMATV: this.student.GMATV,
        GMATVP: this.student.GMATVP,
        GMATQ: this.student.GMATQ,
        GMATQP: this.student.GMATQP,
        GMATW: this.student.GMATW,
        GMATWP: this.student.GMATWP,
        GMATR: this.student.GMATR,
        GMATRP: this.student.GMATRP,
        OtherStandardTest: this.student.OtherStandardTest,//其他类标化成绩
        //Skills & Hobbies
        Language: this.student.Language, 
        ComputerSkills: this.student.ComputerSkills,//计算机技能
        OtherSkills: this.student.OtherSkills,//其他技能或证书
        Hobbies: this.student.Hobbies,//爱好
        //Professional Interest专业兴趣
        Professional1: this.student.Professional1,
        Professional2: this.student.Professional2,
        Professional3: this.student.Professional3,
        //Career Plan职业规划
        CareerPlan1: this.student.CareerPlan1,
        CareerPlan2: this.student.CareerPlan2,
        //Personal Strength个人优势
        Strength1: this.student.Strength1,
        Strength2: this.student.Strength2,
        //母亲信息
        MomName: this.student.MomName,
        MomAddress: this.student.MomAddress,
        MomOrganazation: this.student.MomOrganazation,
        MomJob: this.student.MomJob,
        MomEducation:this.student.MomEducation,//母亲最高学历
        MomSchool:this.student.MomSchool,//母亲毕业院校
        MomGraduation: this.student.MomGraduation,//母亲毕业时间
        MomPhone: this.student.MomPhone,
        MomEmail: this.student.MomEmail,
        //父亲信息
        FatName: this.student.FatName,
        FatAddress: this.student.FatAddress,
        FatOrganazation: this.student.FatOrganazation,
        FatJob: this.student.FatJob,
        FatEducation:this.student.FatEducation,
        FatSchool:this.student.FatSchool,
        FatGraduation: this.student.FatGraduation,
        FatPhone: this.student.FatPhone,
        FatEmail: this.student.FatEmail,
        //年级
        year:(document.getElementById("styear") as HTMLInputElement).value,
    }
    this.http.put('http://localhost:3000/students/' + this.student.userAccount, Student)
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
      alert("更新学生年级成功!!");
    window.location.reload();  
  }

  //将json数组生成excel
  exportAsExcelFile() {
    let json = this.schools;
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        //这里类型如果不正确，下载出来的可能是类似xml文件的东西或者是类似二进制的东西等
    this.saveAsExcelFile(excelBuffer, this.studentName+"的选校列表");
  }
 
  private saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + '.xlsx');
        // 如果写成.xlsx,可能不能打开下载的文件，这可能与Excel版本有关
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

  //direct to the task page
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

  //direct to the addschool page
  hmaddschool(hotel,student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
       "studentID" : this.student._id,
      }
    };
    this.router.navigate(['/hmaddschool'], navigationExtras);
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
  
  //direct to the 推荐人更多信息 page
  studentrec(k) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : this.managerID,
       "studentID" : this.student._id,
       "recommenderID" : k._id,
      }
    };
    this.router.navigate(['/hmstudentrec'], navigationExtras);
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
