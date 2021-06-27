import { Injectable } from '@angular/core';
import { HotelM } from './hm.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Student } from './st.model';

@Injectable({providedIn: 'root'})
export class StService {
  private hotels: HotelM[] =[] ;
  private hotel : HotelM;
  private hotelM: HotelM[] =[] ;
  private hotelMUpdated = new Subject<HotelM[]>();
  private datahotel  :any;
  //声明 变量信息
  private students : Student[] = [];
  private student : Student;
  private studentS : Student[] = [];
  private studentsUpdated = new Subject<Student[]>();


  constructor(private http: HttpClient) { }
  
  getStudent() : any {
    this.http.get<{students: Student[]}>('/api/students').subscribe((Data) => {
        //console.log(Data);
        this.students = Data.students;
        console.log(this.students[0].userAccount);
        this.student = this.students[0];
        //console.log(this.hotel.email);
        
        this.studentsUpdated.next([...this.students]);
      
    });
    // console.log("From  Hotel");
    // console.log(this.hotel)
    // return this.hotel;
  }
  getstudentsUpdatedListener() {
    return this.studentsUpdated.asObservable();
  }

  addStudent(
    id: string,
    userAccount:String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    dob: String, // 生日
    currentAddress: String,
    permanentAddress: String,
    gender: String,
    ssn: String,
    passport: String,//护照或绿卡号码
    visa: String,
    appEmail: String,//申请所用的邮箱账号
    appPsw:String,//申请所用的邮箱密码
    citizen:String,//国籍
    //标化成绩类
    TOEFL:String,
    TOEFLR:String,//托福阅读
    TOEFLL:String,//托福听力
    TOEFLS:String,//托福口语
    TOEFLW:String,//托福写作
    GRE: String,
    GREV: String,//GRE Verbal部分成绩
    GREVP: String,
    GREQ: String,
    GREQP: String,
    GREW: String,
    GREWP: String,
    GMAT: String,//GMAT 部分
    GMATV: String,
    GMATVP: String,
    GMATQ: String,
    GMATQP: String,
    GMATW: String,
    GMATWP: String,
    GMATR: String,
    GMATRP: String,
    OtherStandardTest: String,//其他类标化成绩
    //Skills & Hobbies
    Language:String, 
    ComputerSkills: String,//计算机技能
    OtherSkills: String,//其他技能或证书
    Hobbies: String,//爱好
    //Professional Interest专业兴趣
    Professional1: String,
    Professional2: String,
    Professional3: String,
    //Career Plan职业规划
    CareerPlan1: String,
    CareerPlan2: String,
    //Personal Strength个人优势
    Strength1: String,
    Strength2: String,
    //母亲信息
    MomName: String,
    MomAddress: String,
    MomOrganazation: String,
    MomJob: String,
    MomEducation:String,//母亲最高学历
    MomSchool:String,//母亲毕业院校
    MomGraduation: String,//母亲毕业时间
    MomPhone: String,
    MomEmail: String,
    //父亲信息
    FatName: String,
    FatAddress: String,
    FatOrganazation: String,
    FatJob: String,
    FatEducation:String,//母亲最高学历
    FatSchool:String,//母亲毕业院校
    FatGraduation: String,//母亲毕业时间
    FatPhone: String,
    FatEmail: String,
  ){
    const student: Student = {
      _id: null,
      userAccount:userAccount,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      dob: dob, // 生日
      currentAddress: currentAddress,
      permanentAddress: permanentAddress,
      gender: gender,
      ssn: ssn,
      passport: passport,//护照或绿卡号码
      visa: visa,
      appEmail: appEmail,//申请所用的邮箱账号
      appPsw:appPsw,//申请所用的邮箱密码
      citizen:citizen,//国籍
      //标化成绩类
      TOEFL:TOEFL,
      TOEFLR:TOEFLR,//托福阅读
      TOEFLL:TOEFLL,//托福听力
      TOEFLS:TOEFLS,//托福口语
      TOEFLW:TOEFLW,//托福写作
      GRE: GRE,
      GREV: GREV,//GRE Verbal部分成绩
      GREVP: GREVP,
      GREQ: GREQ,
      GREQP: GREQP,
      GREW: GREW,
      GREWP: GREWP,
      GMAT: GMAT,//GMAT 部分
      GMATV: GMATV,
      GMATVP: GMATVP,
      GMATQ: GMATQ,
      GMATQP: GMATQP,
      GMATW: GMATW,
      GMATWP: GMATWP,
      GMATR: GMATR,
      GMATRP: GMATRP,
      OtherStandardTest: OtherStandardTest,//其他类标化成绩
      //Skills & Hobbies
      Language:Language, 
      ComputerSkills: ComputerSkills,//计算机技能
      OtherSkills: OtherSkills,//其他技能或证书
      Hobbies: Hobbies,//爱好
      //Professional Interest专业兴趣
      Professional1: Professional1,
      Professional2: Professional2,
      Professional3: Professional3,
      //Career Plan职业规划
      CareerPlan1: CareerPlan1,
      CareerPlan2: CareerPlan2,
      //Personal Strength个人优势
      Strength1: Strength1,
      Strength2: Strength2,
      //母亲信息
      MomName: MomName,
      MomAddress: MomAddress,
      MomOrganazation: MomOrganazation,
      MomJob: MomJob,
      MomEducation:MomEducation,//母亲最高学历
      MomSchool:MomSchool,//母亲毕业院校
      MomGraduation: MomGraduation,//母亲毕业时间
      MomPhone: MomPhone,
      MomEmail: MomEmail,
      //父亲信息
      FatName: FatName,
      FatAddress: FatAddress,
      FatOrganazation: FatOrganazation,
      FatJob: FatJob,
      FatEducation:FatEducation,//母亲最高学历
      FatSchool:FatSchool,//母亲毕业院校
      FatGraduation: FatGraduation,//母亲毕业时间
      FatPhone: FatPhone,
      FatEmail: FatEmail,
    };
    this.http.post('/api/studentadd', student).subscribe((responseData) =>{
        this.studentS.push(student);
        this.studentsUpdated.next([...this.studentS]);
    });
  }

  
}


