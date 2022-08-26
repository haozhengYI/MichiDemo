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
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.scss']
})
export class StudentinfoComponent implements OnInit {
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
    //个人信息部分
    (document.getElementById("firstName") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("lastName") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("gender") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("dob") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("currentAddress") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("citizen") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("permanentAddress") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("phone") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("email") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("ssn") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("passport") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("visa") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("appEmail") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("appPsw") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("visa") as HTMLInputElement).removeAttribute("disabled");
    //标化成绩部分
    (document.getElementById("TOEFL") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("TOEFLR") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("TOEFLL") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("TOEFLS") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("TOEFLW") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GRE") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GREV") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GREVP") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GREQ") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GREQP") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GREW") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GREWP") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GMAT") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GMATV") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GMATVP") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GMATQ") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GMATQP") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GMATW") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GMATWP") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GMATR") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("GMATRP") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("OtherStandardTest") as HTMLInputElement).removeAttribute("disabled");

    //Professional Interest专业兴趣
    (document.getElementById("Professional1") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("Professional2") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("Professional3") as HTMLInputElement).removeAttribute("disabled");
    //Career Plan职业规划
    (document.getElementById("CareerPlan1") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("CareerPlan2") as HTMLInputElement).removeAttribute("disabled");
    //Personal Strength个人优势
    (document.getElementById("Strength1") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("Strength2") as HTMLInputElement).removeAttribute("disabled");
    //母亲信息
    (document.getElementById("MomName") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("MomAddress") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("MomOrganazation") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("MomJob") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("MomEducation") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("MomSchool") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("MomGraduation") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("MomPhone") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("MomEmail") as HTMLInputElement).removeAttribute("disabled");
    //父亲信息
    (document.getElementById("FatName") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("FatAddress") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("FatOrganazation") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("FatJob") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("FatEducation") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("FatSchool") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("FatGraduation") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("FatPhone") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("FatEmail") as HTMLInputElement).removeAttribute("disabled");

    (document.getElementById("updatePersonal") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("modifyPersonal") as HTMLInputElement).setAttribute("disabled","");   
  }
  updatePersonal(){
    const Student = {
        userAccount:this.studentUserAcc,//学生account
        firstName: (document.getElementById("firstName") as HTMLInputElement).value,
        lastName: (document.getElementById("lastName") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        dob: (document.getElementById("dob") as HTMLInputElement).value, // 生日
        currentAddress: (document.getElementById("currentAddress") as HTMLInputElement).value,
        permanentAddress: (document.getElementById("permanentAddress") as HTMLInputElement).value,
        gender: (document.getElementById("gender") as HTMLInputElement).value,
        ssn: (document.getElementById("ssn") as HTMLInputElement).value,
        passport: (document.getElementById("passport") as HTMLInputElement).value,//护照或绿卡号码
        visa: (document.getElementById("visa") as HTMLInputElement).value,
        appEmail: (document.getElementById("appEmail") as HTMLInputElement).value,//申请所用的邮箱账号
        appPsw:(document.getElementById("appPsw") as HTMLInputElement).value,//申请所用的邮箱密码
        citizen:(document.getElementById("citizen") as HTMLInputElement).value,//国籍
        //标化成绩类
        TOEFL:(document.getElementById("TOEFL") as HTMLInputElement).value,
        TOEFLR:(document.getElementById("TOEFLR") as HTMLInputElement).value,//托福阅读
        TOEFLL:(document.getElementById("TOEFLL") as HTMLInputElement).value,//托福听力
        TOEFLS:(document.getElementById("TOEFLS") as HTMLInputElement).value,//托福口语
        TOEFLW:(document.getElementById("TOEFLW") as HTMLInputElement).value,//托福写作
        GRE: (document.getElementById("GRE") as HTMLInputElement).value,
        GREV: (document.getElementById("GREV") as HTMLInputElement).value,//GRE Verbal部分成绩
        GREVP: (document.getElementById("GREVP") as HTMLInputElement).value,
        GREQ: (document.getElementById("GREQ") as HTMLInputElement).value,
        GREQP: (document.getElementById("GREQP") as HTMLInputElement).value,
        GREW: (document.getElementById("GREW") as HTMLInputElement).value,
        GREWP: (document.getElementById("GREWP") as HTMLInputElement).value,
        GMAT: (document.getElementById("GMAT") as HTMLInputElement).value,//GMAT 部分
        GMATV: (document.getElementById("GMATV") as HTMLInputElement).value,
        GMATVP: (document.getElementById("GMATVP") as HTMLInputElement).value,
        GMATQ: (document.getElementById("GMATQ") as HTMLInputElement).value,
        GMATQP: (document.getElementById("GMATQP") as HTMLInputElement).value,
        GMATW: (document.getElementById("GMATW") as HTMLInputElement).value,
        GMATWP: (document.getElementById("GMATWP") as HTMLInputElement).value,
        GMATR: (document.getElementById("GMATR") as HTMLInputElement).value,
        GMATRP: (document.getElementById("GMATRP") as HTMLInputElement).value,
        OtherStandardTest: (document.getElementById("OtherStandardTest") as HTMLInputElement).value,//其他类标化成绩
        //Skills & Hobbies
        Language: this.student.Language, 
        ComputerSkills: this.student.ComputerSkills,//计算机技能
        OtherSkills: this.student.OtherSkills,//其他技能或证书
        Hobbies: this.student.Hobbies,//爱好
        //Professional Interest专业兴趣
        Professional1: (document.getElementById("Professional1") as HTMLInputElement).value,
        Professional2: (document.getElementById("Professional2") as HTMLInputElement).value,
        Professional3: (document.getElementById("Professional3") as HTMLInputElement).value,
        //Career Plan职业规划
        CareerPlan1: (document.getElementById("CareerPlan1") as HTMLInputElement).value,
        CareerPlan2: (document.getElementById("CareerPlan2") as HTMLInputElement).value,
        //Personal Strength个人优势
        Strength1: (document.getElementById("Strength1") as HTMLInputElement).value,
        Strength2: (document.getElementById("Strength2") as HTMLInputElement).value,
        //母亲信息
        MomName: (document.getElementById("MomName") as HTMLInputElement).value,
        MomAddress: (document.getElementById("MomAddress") as HTMLInputElement).value,
        MomOrganazation: (document.getElementById("MomOrganazation") as HTMLInputElement).value,
        MomJob: (document.getElementById("MomJob") as HTMLInputElement).value,
        MomEducation:(document.getElementById("MomEducation") as HTMLInputElement).value,//母亲最高学历
        MomSchool:(document.getElementById("MomSchool") as HTMLInputElement).value,//母亲毕业院校
        MomGraduation: (document.getElementById("MomGraduation") as HTMLInputElement).value,//母亲毕业时间
        MomPhone: (document.getElementById("MomPhone") as HTMLInputElement).value,
        MomEmail: (document.getElementById("MomEmail") as HTMLInputElement).value,
        //父亲信息
        FatName: (document.getElementById("FatName") as HTMLInputElement).value,
        FatAddress: (document.getElementById("FatAddress") as HTMLInputElement).value,
        FatOrganazation: (document.getElementById("FatOrganazation") as HTMLInputElement).value,
        FatJob: (document.getElementById("FatJob") as HTMLInputElement).value,
        FatEducation:(document.getElementById("FatEducation") as HTMLInputElement).value,
        FatSchool:(document.getElementById("FatSchool") as HTMLInputElement).value,
        FatGraduation: (document.getElementById("FatGraduation") as HTMLInputElement).value,
        FatPhone: (document.getElementById("FatPhone") as HTMLInputElement).value,
        FatEmail: (document.getElementById("FatEmail") as HTMLInputElement).value,
        //年级
        year:this.student.year,
    }
    this.http.put('http://localhost:3000/students/' + this.studentUserAcc, Student)
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
      alert("更新个人信息成功!!" + (document.getElementById("firstName") as HTMLInputElement).value);
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
