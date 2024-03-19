import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HmService } from '../hm.service';
import {HotelM} from '../hm.model';
import { HttpClient } from '@angular/common/http';
import {Student} from '../st.model';
import {School} from '../school.model';
import {Recommender} from '../recom.model';
import {RecomletterService} from '../recletter.service';
import {Recomletter} from '../recletter.model';
import { NgForm } from '@angular/forms';
import {Statement} from '../statement.model';
import {StatementService} from '../statement.service';


@Component({
  selector: 'app-hmschool',
  templateUrl: './hmschool.component.html',
  styleUrls: ['./hmschool.component.scss']
})
export class HmschoolComponent implements OnInit {

  students: Student[] = [];//all the orders from database
  student :Student;//the specific order selected by this hotel i

  hotels: HotelM[] = [];
  hotel : HotelM;
  schools: School[] = [];
  school: School;
  managerID : any;
  studentID : any;//存选中的student ID
  schoolID  : any;//存选中的school ID
  //hotel个人信息
  name: String;
  location:String;
  phone:String;
  price:String;
  //student个人信息
  Slocation:String;
  Sname: String;
  //school 信息
  
  state: String; //申请状态（四种：进行，完成，收到offer，收到拒信）
  univName: String;//大学名称
  schoolName: String;//学院名称
  majorName: String;//专业名称
  ddl1: String;//DDL 1
  ddl2: String;//DDL 2
  ddl3: String;//DDL 3
  interview: String;//面试 （两种：有-参加时间，无，）
  videoEssay: String;// videoEssay(三种：无，申请前完成，申请后完成)
  link: String;//链接
  applyAccount:String;//申请账号
  applyPassword:String;//申请用密码
  recommNumber:String;//推荐信数量
  other:String;  
  level:String;
  gre:String;

  //推荐人信息
  recommenders : Recommender[] = [];
  recommender : Recommender;
  recommenderID : String;
  recommenderName : any;


  //推荐信信息
  recomletters : Recomletter[] = [];
  recomletter : Recomletter;

  //文书信息
  statements : Statement[] = [];

  private hotelMSub: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private http: HttpClient,
    public hmService: HmService,
    public statementService:StatementService,
    public recomletterService : RecomletterService) { 
      this.route.queryParams.subscribe(params => {
        this.managerID = params["managerID"];
        this.studentID = params["studentID"];
        this.schoolID = params["schoolID" ];
       });
       console.log("学生 ID 为"+this.studentID +" school的ID为" + this.schoolID);
    }
  
    addrecomLetter(form: NgForm){//
      this.recommenderID = (document.getElementById("select") as HTMLInputElement).value;
      let rtype1 = document.getElementById("Academic") as HTMLInputElement;
      let rtype2 = document.getElementById("Professional") as HTMLInputElement;
      let rtype3 = document.getElementById("Rother") as HTMLInputElement;
      //console.log("推荐人ID" + this.recommenderID );  
      for(let rec of this.recommenders){
         if(rec._id ===this.recommenderID){
          this.recommenderName = rec.firstName.concat(" ");
          this.recommenderName = this.recommenderName.concat(rec.lastName);
          //console.log("推荐人名字为"+this.recommenderName);
        }
      }
      if(rtype1.checked==true){
        //console.log("推荐信种类为"+form.value.type +"学校ID"+this.schoolID);
        this.recomletterService.addRecomletter("",this.schoolID, this.studentID,this.recommenderID, 
            this.recommenderName,"Academic","未提交");
      }
      if(rtype2.checked==true){
        //console.log("推荐信种类为"+form.value.type +"学校ID"+this.schoolID);
        this.recomletterService.addRecomletter("",this.schoolID, this.studentID,this.recommenderID, 
            this.recommenderName,"Professional","未提交");
      }
      if(rtype3.checked==true){
        //console.log("推荐信种类为"+form.value.type +"学校ID"+this.schoolID);
        this.recomletterService.addRecomletter("",this.schoolID, this.studentID,this.recommenderID, 
            this.recommenderName,"Rother","未提交");
      }
      alert("添加推荐信成功!!" ); 
      window.location.reload();  
    }

    addstatement(form: NgForm){//
      let question = (document.getElementById("question") as HTMLInputElement).value;
      let words = (document.getElementById("words") as HTMLInputElement).value;
      console.log("题目" + question +"学校ID"+this.schoolID + "字数" + words + "类别" + form.value.stype);  

      //console.log("推荐信种类为"+form.value.type +"学校ID"+this.schoolID);
      this.statementService.addStatement("",this.schoolID, question,form.value.stype, words);
      alert("添加文书成功!!" ); 
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
 
              console.log("Student Personal Information");
              console.log(this.student);
            }
        }
    });
     //展示 申请项目的详细信息
    this.http.get<{schools: School[]}>('http://localhost:3000/schools').subscribe((Data) => {
          //console.log(orderData);
          this.schools = Data.schools;
          for(let s of this.schools){
            if(s._id===this.schoolID){
              //console.log("进入了吗");
              this.school  = s;
              this.state = this.school.state; //申请状态（四种：进行，完成，收到offer，收到拒信）
              this.univName= this.school.univName;//大学名称
              this.schoolName= this.school.schoolName;//学院名称
              this.majorName= this.school.majorName;//专业名称
              this.ddl1= this.school.ddl1;//DDL 1
              this.ddl2= this.school.ddl2;//DDL 2
              this.ddl3= this.school.ddl3//DDL 3
              this.interview= this.school.interview;//面试 （两种：有-参加时间，无，）
              this.videoEssay= this.school.videoEssay;// videoEssay(三种：无，申请前完成，申请后完成)
              this.link= this.school.link//链接
              this.applyAccount= this.school.applyAccount;//申请账号
              this.applyPassword= this.school.applyPassword;//申请用密码
              this.recommNumber= this.school.recommNumber;//推荐信数量
              this.other= this.school.other;
              this.level= this.school.level;
              this.gre= this.school.gre;
            }
        }
      });
    //展示 此学生 推荐人信息
    this.http.get<{recommenders: Recommender[]}>('http://localhost:3000/studentrecommenderdetail/' + this.studentID).subscribe((orderData) => {
      //console.log(orderData);
      this.recommenders = orderData.recommenders;
    }); 

    //展示 这个选校的 推荐信 信息
    this.http.get<{recomletters: Recomletter[]}>('http://localhost:3000/schoolrecomletterlist/' + this.schoolID).subscribe((Data) => {
      //console.log(Data);
      this.recomletters = Data.recomletters;
    }); 
    
    //展示 这个选校的 文书 信息
    this.http.get<{statements: Statement[]}>('http://localhost:3000/statementdetail/' + this.schoolID).subscribe((Data) => {
      //console.log(Data);
      this.statements = Data.statements;
    }); 
      
    this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe((hotels: HotelM[]) => {
      this.hotels = hotels;
      });
  }

  //文书修改
  deleteST(st){
    console.log("文书ID为"+st._id);
    this.http.delete('http://localhost:3000/statements/'+ st._id).subscribe((oooData) => {     
        window.location.reload();
    });
  }
  //推荐信修改
  deleteRL(l){
    console.log("推荐信ID为"+l._id);
    this.http.delete('http://localhost:3000/recomletters/'+ l._id).subscribe((oooData) => {     
        window.location.reload();
    });
  }
  modify(){
    //console.log("进去了吗？？？");
    (document.getElementById("univName") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("schoolName") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("majorName") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("ddl1") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("ddl2") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("ddl3") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("interview") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("videoEssay") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("link") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("applyAccount") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("applyPassword") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("recommNumber") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("other") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("level") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("gre") as HTMLInputElement).removeAttribute("disabled");
    
    (document.getElementById("confirm") as HTMLInputElement).removeAttribute("disabled");
    (document.getElementById("modi") as HTMLInputElement).setAttribute("disabled","");   
  }
  update(){
    //console.log("Inside Update"+ this.ddl3);

    const School = {
      userAccount:this.studentID,//学生id
        state: this.state, //申请状态（四种：进行，完成，收到offer，收到拒信）
        univName: this.univName,//大学名称
        schoolName: this.schoolName,//学院名称
        majorName: this.majorName,//专业名称
        ddl1: this.ddl1,//DDL 1
        ddl2: this.ddl2,//DDL 2
        ddl3: this.ddl3,//DDL 3
        interview: this.interview,//面试 （两种：有-参加时间，无，）
        videoEssay: this.videoEssay, // videoEssay(三种：无，申请前完成，申请后完成)
        link: this.link, //链接
        applyAccount:this.applyAccount,//申请账号
        applyPassword:this.applyPassword,//申请用密码
        recommNumber:this.recommNumber,//推荐信数量
        other:this.other,
        level:this.level,
        gre:this.gre,
    }
    this.http.put('http://localhost:3000/schools/' + this.schoolID, School)
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
      alert("更新项目信息成功!!");
      window.location.reload();  
  }

  updateStateDone(){
    const School = {
      userAccount:this.studentID,//学生id
        state: "已完成", //申请状态（四种：进行，完成，收到offer，收到拒信）
        univName: this.univName,//大学名称
        schoolName: this.schoolName,//学院名称
        majorName: this.majorName,//专业名称
        ddl1: this.ddl1,//DDL 1
        ddl2: this.ddl2,//DDL 2
        ddl3: this.ddl3,//DDL 3
        interview: this.interview,//面试 （两种：有-参加时间，无，）
        videoEssay: this.videoEssay, // videoEssay(三种：无，申请前完成，申请后完成)
        link: this.link, //链接
        applyAccount:this.applyAccount,//申请账号
        applyPassword:this.applyPassword,//申请用密码
        recommNumber:this.recommNumber,//推荐信数量
        other:this.other,
        level:this.level,
        gre:this.gre,
    }
    this.http.put('http://localhost:3000/schools/' + this.schoolID, School)
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
      alert("更新项目状态成功!!");
      window.location.reload();  
  }

  updateStateOffer(){
    const School = {
      userAccount:this.studentID,//学生id
        state: "Offer", //申请状态（四种：进行，完成，收到offer，收到拒信）
        univName: this.univName,//大学名称
        schoolName: this.schoolName,//学院名称
        majorName: this.majorName,//专业名称
        ddl1: this.ddl1,//DDL 1
        ddl2: this.ddl2,//DDL 2
        ddl3: this.ddl3,//DDL 3
        interview: this.interview,//面试 （两种：有-参加时间，无，）
        videoEssay: this.videoEssay, // videoEssay(三种：无，申请前完成，申请后完成)
        link: this.link, //链接
        applyAccount:this.applyAccount,//申请账号
        applyPassword:this.applyPassword,//申请用密码
        recommNumber:this.recommNumber,//推荐信数量
        other:this.other,
        level:this.level,
        gre:this.gre,
    }
    this.http.put('http://localhost:3000/schools/' + this.schoolID, School)
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
      alert("更新项目状态成功!!");
      window.location.reload();  
  }
  updateStateRef(){
    const School = {
      userAccount:this.studentID,//学生id
        state: "拒信", //申请状态（四种：进行，完成，收到offer，收到拒信）
        univName: this.univName,//大学名称
        schoolName: this.schoolName,//学院名称
        majorName: this.majorName,//专业名称
        ddl1: this.ddl1,//DDL 1
        ddl2: this.ddl2,//DDL 2
        ddl3: this.ddl3,//DDL 3
        interview: this.interview,//面试 （两种：有-参加时间，无，）
        videoEssay: this.videoEssay, // videoEssay(三种：无，申请前完成，申请后完成)
        link: this.link, //链接
        applyAccount:this.applyAccount,//申请账号
        applyPassword:this.applyPassword,//申请用密码
        recommNumber:this.recommNumber,//推荐信数量
        other:this.other,
        level:this.level,
        gre:this.gre,
    }
    this.http.put('http://localhost:3000/schools/' + this.schoolID, School)
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
      alert("更新项目状态成功!!");
      window.location.reload();  
  }


  updateLetterNoSubmit(l){
    const Recomletter = {
        schoolID:l.schoolID, //对应申请学校的id
        studentID:l.studentID,//对应学生的id
        recommender:l.recommender,//推荐人id
        recommenderName:l.recommenderName,//推荐人名字
        type:l.type,//推荐信为 acedemic / professional
        state: "未提交",//推荐信状态（提交/未提交/弃用）
    }
    this.http.put('http://localhost:3000/recomletters/' + l._id, Recomletter)
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
      alert("更新推荐信状态成功!!");
      window.location.reload();  
  }

  updateLetterSubmit(l){
    const Recomletter = {
        schoolID:l.schoolID, //对应申请学校的id
        studentID:l.studentID,//对应学生的id
        recommender:l.recommender,//推荐人id
        recommenderName:l.recommenderName,//推荐人名字
        type:l.type,//推荐信为 acedemic / professional
        state: "已提交",//推荐信状态（提交/未提交/弃用）
    }
    this.http.put('http://localhost:3000/recomletters/' + l._id, Recomletter)
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
      alert("更新推荐信状态成功!!");
      window.location.reload();  
  }

  updateLetterDiscard(l){
    const Recomletter = {
        schoolID:l.schoolID, //对应申请学校的id
        studentID:l.studentID,//对应学生的id
        recommender:l.recommender,//推荐人id
        recommenderName:l.recommenderName,//推荐人名字
        type:l.type,//推荐信为 acedemic / professional
        state: "弃用",//推荐信状态（提交/未提交/弃用）
    }
    this.http.put('http://localhost:3000/recomletters/' + l._id, Recomletter)
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
      alert("更新推荐信状态成功!!");
      window.location.reload();  
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
  //direct to the register page
  hmstudent(hotel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       "managerID" : hotel.userAccount,
       "studentID" : this.studentID,
      }
    };
    this.router.navigate(['/hmstudent'], navigationExtras);
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
  

  ngOnDestroy() {
    this.hotelMSub.unsubscribe();
  }
}
