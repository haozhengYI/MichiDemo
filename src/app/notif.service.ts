import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Notif } from './notif.model';

@Injectable({providedIn: 'root'})
export class NotifService {

  //声明 变量信息
  private notifs : Notif[] = [];
  private notif : Notif;
  private notifS : Notif[] = [];
  private notifsUpdated = new Subject<Notif[]>();


  constructor(private http: HttpClient) { }
  
  getNotif() : any {
    this.http.get<{notifs: Notif[]}>('http://localhost:3000/notifs').subscribe((Data) => {
        this.notifs = Data.notifs;
        this.notif = this.notifs[0];
        
        this.notifsUpdated.next([...this.notifs]);
      
    });
  }
  getnotifsUpdatedListener() {
    return this.notifsUpdated.asObservable();
  }

  addNotif(
    id: string,
    userAccount:String,//学生的id
    content: String,//存储通知内容
    ndate:String,//通知日期
    nstate:String,//通知状态（"未读/已读"）
    ntype:String,//通知类型（"紧急/一般/比较紧急"）
  ){
    const notif: Notif = {
      _id: null,
      userAccount:userAccount,//学生的id
        content: content,//存储通知内容
        ndate:ndate,//通知日期
        nstate:nstate,//通知状态（"未读/已读"）
        ntype:ntype,//通知类型（"紧急/一般/比较紧急"）
    };
    this.http.post('http://localhost:3000/notifadd', notif).subscribe((responseData) =>{
        this.notifS.push(notif);
        this.notifsUpdated.next([...this.notifS]);
    });
  }

  
}