import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HmService } from '../hm.service';
import {HotelM} from '../hm.model';
import { HttpClient } from '@angular/common/http';
import {Student} from '../st.model';
import {School} from '../school.model';
import {Recommender} from '../recom.model';
import {Recomletter} from '../recletter.model';
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
  //推荐信矩阵
  recomletters: Recomletter[] = [];
  letterMap: { [key: string]: Recomletter } = {};
  busyKeys: { [key: string]: boolean } = {};
  selectedRecId = '';
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
    //展示 此学生 推荐信分配
    this.loadRecomletters();    
    
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

  loadRecomletters() {
    this.http.get<{recomletters: Recomletter[]}>('http://localhost:3000/studentrecomletterlist/' + this.studentID)
      .subscribe((data) => {
        this.recomletters = data.recomletters || [];
        this.rebuildLetterMap();
      });
  }

  letterKey(schoolId: any, recId: any): string {
    return String(schoolId) + '_' + String(recId);
  }

  rebuildLetterMap() {
    const map: { [key: string]: Recomletter } = {};
    for (let i = 0; i < this.recomletters.length; i++) {
      const letter = this.recomletters[i];
      const key = this.letterKey(letter.schoolID, letter.recommender);
      if (!map[key]) {
        map[key] = letter;
      }
    }
    this.letterMap = map;
  }

  getLetter(school: School, rec: Recommender): Recomletter {
    if (!school || !rec) {
      return null;
    }
    return this.letterMap[this.letterKey(school._id, rec._id)] || null;
  }

  isCellBusy(school: School, rec: Recommender): boolean {
    if (!school || !rec) {
      return false;
    }
    return !!this.busyKeys[this.letterKey(school._id, rec._id)];
  }

  setCellBusy(schoolId: any, recId: any, busy: boolean) {
    const key = this.letterKey(schoolId, recId);
    if (busy) {
      this.busyKeys[key] = true;
    } else {
      delete this.busyKeys[key];
    }
  }

  recDisplayName(rec: Recommender): string {
    return (rec.firstName || '') + ' ' + (rec.lastName || '');
  }

  countLettersForSchool(school: School): number {
    if (!school) {
      return 0;
    }
    let n = 0;
    for (let i = 0; i < this.recomletters.length; i++) {
      if (String(this.recomletters[i].schoolID) === String(school._id)) {
        n++;
      }
    }
    return n;
  }

  countLettersForSchoolType(school: School, type: string): number {
    if (!school) {
      return 0;
    }
    const want = String(type || '').toLowerCase();
    let n = 0;
    for (let i = 0; i < this.recomletters.length; i++) {
      const letter = this.recomletters[i];
      if (String(letter.schoolID) !== String(school._id)) {
        continue;
      }
      if (String(letter.type || '').toLowerCase() === want) {
        n++;
      }
    }
    return n;
  }

  isRecShort(school: School): boolean {
    return this.recGap(school).short;
  }

  recGapText(school: School): string {
    return this.recGap(school).text;
  }

  private recGap(school: School): { short: boolean, text: string } {
    const need = this.parseRecNeed(school ? school.recommNumber : '');
    const assigned = this.countLettersForSchool(school);
    const academic = this.countLettersForSchoolType(school, 'Academic');
    const professional = this.countLettersForSchoolType(school, 'Professional');
    const parts = [];
    if (need.total !== null && assigned < need.total) {
      parts.push('已分配 ' + assigned + '，需要 ' + need.total);
    }
    if (need.academic !== null && academic < need.academic) {
      parts.push('Academic 已分配 ' + academic + '，需要 ' + need.academic);
    }
    if (need.professional !== null && professional < need.professional) {
      parts.push('Professional 已分配 ' + professional + '，需要 ' + need.professional);
    }
    return { short: parts.length > 0, text: parts.join('\n') };
  }

  private parseRecNeed(raw: any): { total: number | null, academic: number | null, professional: number | null } {
    const empty = { total: null, academic: null, professional: null };
    const text = this.normalizeRecText(raw);
    if (!text) {
      return empty;
    }
    if (/^optional$/i.test(text) || /^\d+\s*\(?\s*optional\s*\)?$/i.test(text)) {
      return empty;
    }
    if (/^up\s*to\s*\d+/i.test(text) || /0\s*required/i.test(text)) {
      return empty;
    }
    if (/^(prefer|建议)/i.test(text) && !/必须|至少|最少|least|required/i.test(text)) {
      return empty;
    }

    let academic = this.maxRecTypeCount(text, 'academic|acedemic|学术');
    let professional = this.maxRecTypeCount(text, 'professional|工作推荐信|工作推荐|工作|专业');
    if (academic === null && /必须.{0,8}学术|一定要.{0,8}学术/.test(text)) {
      academic = 1;
    }
    if (professional === null && /必须.{0,8}工作|一定要.{0,8}工作|必须.{0,12}professional/i.test(text)) {
      professional = 1;
    }
    if (academic === null && /\(\s*(?:academic|acedemic|学术)\s*\)/i.test(text)) {
      academic = 1;
    }
    if (professional === null && /\(\s*professional\s*\)/i.test(text)) {
      professional = 1;
    }

    const outside = text.replace(/\([^)]*\)/g, ' ');
    let total: number | null = null;
    const lead = outside.match(/^\s*(\d+)/);
    if (lead) {
      const after = outside.slice(lead[0].length);
      const attached = /^\s*(?:封|个)?\s*(academic|acedemic|professional|学术|工作|专业|[A-Za-z\u4e00-\u9fff])/i.test(after);
      if (attached) {
        total = this.sumNumberedRecPhrases(outside);
      }
      if (total === null) {
        total = this.recTextNumber(lead[1]);
      }
    }
    if (total === null) {
      const least = text.match(/(?:至少|最少|必须|least|只要|只需)\s*(\d+|[一二两三四五])/i);
      if (least && !this.isSoftRecClause(this.recClauseAround(text, least.index || 0, least[0].length))) {
        total = this.recTextNumber(least[1]);
      }
    }
    const required = text.match(/(\d+)\s*required/i);
    if (required) {
      const requiredCount = this.recTextNumber(required[1]);
      if (requiredCount > 0 && (total === null || requiredCount < total)) {
        total = requiredCount;
      }
    }
    const typeSum = (academic || 0) + (professional || 0);
    if (typeSum > 0 && (total === null || total < typeSum)) {
      total = typeSum;
    }
    return { total: total, academic: academic, professional: professional };
  }

  private normalizeRecText(raw: any): string {
    return String(raw || '')
      .replace(/[（]/g, '(')
      .replace(/[）]/g, ')')
      .replace(/`/g, '')
      .replace(/[０-９]/g, function (d) { return String('０１２３４５６７８９'.indexOf(d)); })
      .replace(/\s+/g, ' ')
      .trim();
  }

  private recTextNumber(token: string): number {
    const map: { [key: string]: number } = { '一': 1, '二': 2, '两': 2, '三': 3, '四': 4, '五': 5 };
    if (map[token] != null) {
      return map[token];
    }
    const n = parseInt(token, 10);
    return isNaN(n) ? 0 : n;
  }

  private recClauseAround(text: string, index: number, length: number): string {
    const seps = /[，。,.;；（）()\n]/;
    let start = index;
    while (start > 0 && !seps.test(text.charAt(start - 1))) {
      start--;
    }
    let end = index + length;
    while (end < text.length && !seps.test(text.charAt(end))) {
      end++;
    }
    return text.slice(start, end);
  }

  private isSoftRecClause(clause: string): boolean {
    return /偏好|优先|建议|preferred|prefer/i.test(clause) && !/必须|至少|最少|需要|要求|least|required/i.test(clause);
  }

  private maxRecTypeCount(text: string, wordPattern: string): number | null {
    const re = new RegExp('(\\d+|[一二两三四五])\\s*(?:封|个)?\\s*(?:课堂)?\\s*(?:' + wordPattern + ')', 'ig');
    let best: number | null = null;
    let match = re.exec(text);
    while (match) {
      if (!this.isSoftRecClause(this.recClauseAround(text, match.index, match[0].length))) {
        const n = this.recTextNumber(match[1]);
        if (n > 0) {
          best = best === null ? n : Math.max(best, n);
        }
      }
      match = re.exec(text);
    }
    return best;
  }

  private sumNumberedRecPhrases(text: string): number | null {
    const re = /(\d+|[一二两三四五])\s*(?:封|个)?\s*[A-Za-z\u4e00-\u9fff]/g;
    let sum = 0;
    let found = 0;
    let match = re.exec(text);
    while (match) {
      if (!this.isSoftRecClause(this.recClauseAround(text, match.index, match[0].length))) {
        sum += this.recTextNumber(match[1]);
        found++;
      }
      match = re.exec(text);
    }
    return found ? sum : null;
  }

  countLettersForRec(rec: Recommender): number {
    if (!rec) {
      return 0;
    }
    let n = 0;
    for (let i = 0; i < this.recomletters.length; i++) {
      if (String(this.recomletters[i].recommender) === String(rec._id)) {
        n++;
      }
    }
    return n;
  }

  cellStateClass(letter: Recomletter): string {
    if (!letter) {
      return 'rec-empty';
    }
    if (letter.state === '已提交') {
      return 'rec-submitted';
    }
    if (letter.state === '弃用') {
      return 'rec-discarded';
    }
    return 'rec-pending';
  }

  assignLetter(school: School, rec: Recommender, event: Event) {
    const select = event.target as HTMLSelectElement;
    const type = select.value;
    if (!type || this.getLetter(school, rec) || this.isCellBusy(school, rec)) {
      select.value = '';
      return;
    }
    this.setCellBusy(school._id, rec._id, true);
    const recomletter: Recomletter = {
      _id: null,
      schoolID: school._id,
      studentID: this.studentID,
      recommender: rec._id,
      recommenderName: this.recDisplayName(rec),
      type: type,
      state: '未提交'
    };
    this.http.post<{recomletter?: Recomletter}>('http://localhost:3000/recomletteradd', recomletter)
      .subscribe(
        (res) => {
          if (res && res.recomletter) {
            this.recomletters.push(res.recomletter);
            this.rebuildLetterMap();
            this.setCellBusy(school._id, rec._id, false);
          } else {
            this.setCellBusy(school._id, rec._id, false);
            this.loadRecomletters();
          }
        },
        () => {
          select.value = '';
          this.setCellBusy(school._id, rec._id, false);
          alert('添加推荐信失败');
        }
      );
  }

  updateLetterType(letter: Recomletter, type: string) {
    if (!letter || !type || letter.type === type) {
      return;
    }
    const previous = letter.type;
    letter.type = type;
    this.setCellBusy(letter.schoolID, letter.recommender, true);
    this.http.put('http://localhost:3000/recomletters/' + letter._id, letter)
      .subscribe(
        () => {
          this.setCellBusy(letter.schoolID, letter.recommender, false);
        },
        () => {
          letter.type = previous;
          this.setCellBusy(letter.schoolID, letter.recommender, false);
          alert('更新推荐信类型失败');
        }
      );
  }

  updateLetterState(letter: Recomletter, state: string) {
    if (!letter || !state || letter.state === state) {
      return;
    }
    const previous = letter.state;
    letter.state = state;
    this.setCellBusy(letter.schoolID, letter.recommender, true);
    this.http.put('http://localhost:3000/recomletters/' + letter._id, letter)
      .subscribe(
        () => {
          this.setCellBusy(letter.schoolID, letter.recommender, false);
        },
        () => {
          letter.state = previous;
          this.setCellBusy(letter.schoolID, letter.recommender, false);
          alert('更新推荐信状态失败');
        }
      );
  }

  unbindLetter(letter: Recomletter) {
    if (!letter || !confirm('确定取消该推荐信绑定？')) {
      return;
    }
    this.setCellBusy(letter.schoolID, letter.recommender, true);
    this.http.delete('http://localhost:3000/recomletters/' + letter._id)
      .subscribe(
        () => {
          const id = String(letter._id);
          const next: Recomletter[] = [];
          for (let i = 0; i < this.recomletters.length; i++) {
            if (String(this.recomletters[i]._id) !== id) {
              next.push(this.recomletters[i]);
            }
          }
          this.recomletters = next;
          this.rebuildLetterMap();
          this.setCellBusy(letter.schoolID, letter.recommender, false);
        },
        () => {
          this.setCellBusy(letter.schoolID, letter.recommender, false);
          alert('取消绑定失败');
        }
      );
  }

  //申请状态：空值显示为「未完成」
  getAppStatus(field: string): string {
    if (!this.student) {
      return '未完成';
    }
    const value = (this.student as any)[field];
    if (!value) {
      return '未完成';
    }
    return String(value);
  }

  isAppStatusDone(field: string): boolean {
    return this.getAppStatus(field) === '已完成';
  }

  //点击切换申请状态：未完成 <-> 已完成
  toggleAppStatus(field: string, event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!this.student) {
      return;
    }
    const previous = (this.student as any)[field];
    const next = this.isAppStatusDone(field) ? '未完成' : '已完成';
    (this.student as any)[field] = next;
    this.http.put('http://localhost:3000/students/' + this.student.userAccount + '/appstatus', {
      field: field,
      value: next
    }).subscribe(
      () => {},
      () => {
        (this.student as any)[field] = previous;
        alert('更新申请状态失败');
      }
    );
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
        coordinator:(document.getElementById("stcoord") as HTMLInputElement).value,
        //申请状态
        dingxiao:this.student.dingxiao,//定校
        jianli:this.student.jianli,//简历
        tuijianren1:this.student.tuijianren1,//推荐人阶段1，出套词信
        tuijianren2:this.student.tuijianren2,//推荐人阶段2，出推荐信
        wenshu:this.student.wenshu,//文书阶段
        mianshi:this.student.mianshi,//面试阶段
        tijiao:this.student.tijiao,//提交阶段
        shenhetuijian:this.student.shenhetuijian,//审核推荐信阶段
        shenhecailiao:this.student.shenhecailiao,//审核材料阶段
        querenoffer:this.student.querenoffer,//确认offer阶段
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

  exportRecSchoolList() {
    if (this.selectedRecId === '__all__') {
      this.exportAllRecSchoolList();
      return;
    }
    let rec: Recommender = null;
    for (let i = 0; i < this.recommenders.length; i++) {
      if (String(this.recommenders[i]._id) === String(this.selectedRecId)) {
        rec = this.recommenders[i];
        break;
      }
    }
    if (!rec) {
      alert('请先选择一位推荐人');
      return;
    }
    const rows = [];
    for (let i = 0; i < this.schools.length; i++) {
      const s = this.schools[i];
      if (!this.getLetter(s, rec)) {
        continue;
      }
      rows.push({
        'University ': s.univName || '',
        'Program': s.majorName || '',
        'Deadline 1': s.ddl1 || '',
        'Deadline 2': s.ddl2 || ''
      });
    }
    if (rows.length === 0) {
      alert('该推荐人还没有分配项目');
      return;
    }
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(rows);
    const workbook: XLSX.WorkBook = { Sheets: { 'School List': worksheet }, SheetNames: ['School List'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const fileName = this.recDisplayName(rec).trim() + '_School List';
    this.saveAsExcelFile(excelBuffer, fileName, true);
  }

  exportAllRecSchoolList() {
    if (this.recommenders.length === 0 || this.schools.length === 0) {
      alert('还没有推荐人或申请项目');
      return;
    }
    const columns = this.recExportColumns();
    const rows = [];
    for (let i = 0; i < this.schools.length; i++) {
      const s = this.schools[i];
      const row: any = {
        'University ': s.univName || '',
        'Program': s.majorName || '',
        'Deadline 1': s.ddl1 || '',
        'Deadline 2': s.ddl2 || ''
      };
      for (let j = 0; j < columns.length; j++) {
        row[columns[j].name] = this.getLetter(s, columns[j].rec) ? '✅' : '';
      }
      rows.push(row);
    }
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(rows);
    const workbook: XLSX.WorkBook = { Sheets: { 'School List': worksheet }, SheetNames: ['School List'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, '全部推荐人_School List', true);
  }

  private recExportColumns(): { rec: Recommender, name: string }[] {
    const baseNames: string[] = [];
    const totals: { [name: string]: number } = {};
    for (let i = 0; i < this.recommenders.length; i++) {
      const name = this.recDisplayName(this.recommenders[i]).trim() || '推荐人';
      baseNames.push(name);
      totals[name] = (totals[name] || 0) + 1;
    }
    const seen: { [name: string]: number } = {};
    const used: { [name: string]: boolean } = {};
    const columns: { rec: Recommender, name: string }[] = [];
    for (let i = 0; i < this.recommenders.length; i++) {
      let name = baseNames[i];
      if (totals[name] > 1) {
        seen[name] = (seen[name] || 0) + 1;
        const org = this.recommenders[i].organization ? String(this.recommenders[i].organization) : '';
        name = org ? name + ' (' + org + ')' : name + ' ' + seen[name];
      }
      let unique = name;
      let n = 2;
      while (used[unique]) {
        unique = name + ' ' + n;
        n++;
      }
      used[unique] = true;
      columns.push({ rec: this.recommenders[i], name: unique });
    }
    return columns;
  }
 
  private saveAsExcelFile(buffer: any, fileName: string, exactName?: boolean) {
    const data: Blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    const downloadName = exactName
      ? fileName + '.xlsx'
      : fileName + '_export_' + new Date().getTime() + '.xlsx';
    FileSaver.saveAs(data, downloadName);
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
