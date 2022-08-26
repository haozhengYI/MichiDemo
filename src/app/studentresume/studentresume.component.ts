import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StService } from '../st.service';
import {Student} from '../st.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,  NavigationExtras,Router } from '@angular/router';
import {School} from '../school.model';
import { NgForm } from '@angular/forms';
import {Education} from '../education.model';
import {EducationService} from '../education.service';
import {Experience} from '../experience.model';
import {ExperienceService} from '../experience.service';
import {Publication} from '../publication.model';
import {PublicationService} from '../publication.service';
import {Activity} from '../activity.model';
import {ActivityService} from '../activity.service';
import {Honor} from '../honor.model';
import {HonorService} from '../honor.service';

@Component({
  selector: 'app-studentresume',
  templateUrl: './studentresume.component.html',
  styleUrls: ['./studentresume.component.scss']
})
export class StudentresComponent implements OnInit {
  students: Student[] = [];
  student : Student;

  studentUserAcc : any;
  studentID : any;
  //school 信息
  schools: School[] = [];
  school: School[] = [];
  //教育背景信息
  educations : Education[] = [];
  education : Education[] = [];
  //工作背景信息
  experiences : Experience[] = [];
  experience : Experience[] = [];
  //论文
  publications : Publication[] = [];
  publication : Publication[] = [];
  //课外活动
  activitys : Activity[] = [];
  activity : Activity[] = [];
  //奖项
  honors : Honor[] = [];
  honor : Honor[] = [];
  private stSub: Subscription;

  constructor(
    public stService: StService,
    private http: HttpClient,
    private route: ActivatedRoute, 
    private router: Router,
    public educationService :EducationService,
    public experienceService : ExperienceService,
    public publicationService : PublicationService,
    public activityService : ActivityService,
    public honorService : HonorService,
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
      //展示 此学生 论文信息
    this.http.get<{publications: Publication[]}>('http://localhost:3000/publications/').subscribe((Data) => {
      this.publications = Data.publications;
          for(let p of this.publications){
            if(p.userAccount=== this.studentID){
              this.publication.push(p);
            }
          }
          console.log("学生的论文"+this.publication);    
      });
      //展示 此学生 课外活动信息
    this.http.get<{activitys: Activity[]}>('http://localhost:3000/activitys/').subscribe((Data) => {
      this.activitys = Data.activitys;
          for(let a of this.activitys){
            if(a.userAccount=== this.studentID){
              this.activity.push(a);
            }
          }
          console.log("学生的课外活动"+this.activity);    
      });
      //展示 此学生 奖项信息
    this.http.get<{honors: Honor[]}>('http://localhost:3000/honors/').subscribe((Data) => {
      this.honors = Data.honors;
          for(let h of this.honors){
            if(h.userAccount=== this.studentID){
              this.honor.push(h);
            }
          }
          console.log("学生的奖项"+this.honor);    
      });


    this.stSub = this.stService.getstudentsUpdatedListener().subscribe((students: Student[]) => {
    this.students = students;
    });
  }

  modifyPersonal(){  
    //Skills & Hobbies
    (document.getElementById("Language") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("ComputerSkills") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("OtherSkills") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("Hobbies") as HTMLInputElement).removeAttribute("disabled");

    (document.getElementById("updatePersonal") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("modifyPersonal") as HTMLInputElement).setAttribute("disabled","");   
       
  }
  updatePersonal(){
    const Student = {
      userAccount:this.studentUserAcc,//学生account
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
      appEmail: this.student.appEmail,//申请所用的邮箱账号
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
      GREVP: this.student.GREVP,
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
      Language:(document.getElementById("Language") as HTMLInputElement).value, 
      ComputerSkills: (document.getElementById("ComputerSkills") as HTMLInputElement).value,//计算机技能
      OtherSkills: (document.getElementById("OtherSkills") as HTMLInputElement).value,//其他技能或证书
      Hobbies: (document.getElementById("Hobbies") as HTMLInputElement).value,//爱好
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

  }
    this.http.put('http://localhost:3000/students/' + this.studentUserAcc, Student)
      .subscribe((data) => {
        const options = {
          overlay: true,
          overlayClickToClose: true,
          showCloseButton: true,
          duration: 5000
        }
      })
      alert("更新个人信息成功!!" + this.student.firstName);
    window.location.reload();  
  }

  addEducation(form: NgForm){//form内的信息使用过html中的name来获取的
    let educationType = "";
    let type1 = document.getElementById("type1") as HTMLInputElement;
    let type2 = document.getElementById("type2") as HTMLInputElement;
    let type3 = document.getElementById("type3") as HTMLInputElement;
    if(type1.checked==true){
      educationType = "高中";
    }
    if(type2.checked==true){
      educationType = "本科";
    }
    if(type3.checked==true){
      educationType = "研究生";
    }

    let educationName = (document.getElementById("educationName") as HTMLInputElement).value;
    let educationLocation = (document.getElementById("educationLocation") as HTMLInputElement).value;
    let educationStart = (document.getElementById("educationStart") as HTMLInputElement).value;
    let educationEnd = (document.getElementById("educationEnd") as HTMLInputElement).value;
    let major = (document.getElementById("major") as HTMLInputElement).value;
    let Degree = (document.getElementById("Degree") as HTMLInputElement).value;
    let GPA = (document.getElementById("GPA") as HTMLInputElement).value;
    let MajorGPA = (document.getElementById("MajorGPA") as HTMLInputElement).value;
    let SecondDegree = (document.getElementById("SecondDegree") as HTMLInputElement).value;
    let SecondGPA = (document.getElementById("SecondGPA") as HTMLInputElement).value;
    let other = (document.getElementById("other") as HTMLInputElement).value;

    console.log("School类别" + educationType + "学校名称"+educationName );
    this.educationService.addEducation("", this.studentID,educationType,educationName, educationLocation, educationStart,
      educationEnd, major, Degree, GPA, MajorGPA, SecondDegree,
       SecondGPA, other );
      alert("添加教育背景成功!!");
      window.location.reload();  
  }

  addExperience(form: NgForm){//form内的信息使用过html中的name来获取的
    let experiencetype ="";
    let experiencetype1 = document.getElementById("experiencetype1") as HTMLInputElement;
    let experiencetype2 = document.getElementById("experiencetype2") as HTMLInputElement;

    if(experiencetype1.checked==true){
      experiencetype = "教学科研";
    }
    if(experiencetype2.checked==true){
      experiencetype = "工作经历";
    }

    let institution = (document.getElementById("institution") as HTMLInputElement).value;
    let institutionLocation = (document.getElementById("institutionLocation") as HTMLInputElement).value;
    let experienceStart = (document.getElementById("experienceStart") as HTMLInputElement).value;
    let experienceEnd = (document.getElementById("experienceEnd") as HTMLInputElement).value;
    let experienceposition = (document.getElementById("experienceposition") as HTMLInputElement).value;
    let responsibilities = (document.getElementById("responsibilities") as HTMLInputElement).value;
    let project = (document.getElementById("project") as HTMLInputElement).value;
    let achievement = (document.getElementById("achievement") as HTMLInputElement).value;
    

    //console.log("School名" + form.value.type );
    this.experienceService.addExperience("", this.studentID,experiencetype, institution, institutionLocation, experienceStart,
      experienceEnd, experienceposition, responsibilities, project, achievement );
      alert("添加工作背景成功!!");
      window.location.reload();  
  }

  addPublication(form: NgForm){//form内的信息使用过html中的name来获取的
    
    let PublicationTitle = (document.getElementById("PublicationTitle") as HTMLInputElement).value;
    let PublicationJournal = (document.getElementById("PublicationJournal") as HTMLInputElement).value;
    let PublicationDate = (document.getElementById("PublicationDate") as HTMLInputElement).value;
    let PublicationLink = (document.getElementById("PublicationLink") as HTMLInputElement).value;
    let PublicationAuthors = (document.getElementById("PublicationAuthors") as HTMLInputElement).value;
    let PublicationAbstract = (document.getElementById("PublicationAbstract") as HTMLInputElement).value;
    let PublicationLevel = (document.getElementById("PublicationLevel") as HTMLInputElement).value;
    //console.log("School名" + form.value.type );
    this.publicationService.addPublication("", this.studentID,PublicationTitle,PublicationJournal, PublicationDate, PublicationLink,
      PublicationAuthors, PublicationAbstract, PublicationLevel,);
      alert("添加论文成功!!");
      window.location.reload();  
  }

  addActivity(form: NgForm){//form内的信息使用过html中的name来获取的
    
    let activityOrganization = (document.getElementById("activityOrganization") as HTMLInputElement).value;
    let activityStart = (document.getElementById("activityStart") as HTMLInputElement).value;
    let activityEnd = (document.getElementById("activityEnd") as HTMLInputElement).value;
    let activityPosition = (document.getElementById("activityPosition") as HTMLInputElement).value;
    let activityDescription = (document.getElementById("activityDescription") as HTMLInputElement).value;

    //console.log("School名" + form.value.type );
    this.activityService.addActivity("", this.studentID,activityOrganization,activityStart, activityEnd, activityPosition,
      activityDescription, );
      alert("添加课外活动成功!!");
      window.location.reload();  
  }

  addHonor(form: NgForm){//form内的信息使用过html中的name来获取的
    
    let honorDate = (document.getElementById("honorDate") as HTMLInputElement).value;
    let prize = (document.getElementById("prize") as HTMLInputElement).value;
    let percentage = (document.getElementById("percentage") as HTMLInputElement).value;
    let grantor = (document.getElementById("grantor") as HTMLInputElement).value;
  
    console.log("奖项日期" + prize );
    this.honorService.addHonor("", this.studentID,honorDate,prize, 
    percentage, grantor);
       alert("添加奖励成功!!");
      window.location.reload();  
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

  //direct to the 推荐人信息 page
  rec(student) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "studentUserAcc" : student.userAccount,
       "studentID" : this.studentID,
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

  ngOnDestroy() {
    this.stSub.unsubscribe();
  }
}
