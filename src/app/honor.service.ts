import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Honor } from './honor.model';

@Injectable({providedIn: 'root'})
export class HonorService {

  //声明 变量信息
  private honors : Honor[] = [];
  private honor : Honor;
  private honorS : Honor[] = [];
  private honorsUpdated = new Subject<Honor[]>();


  constructor(private http: HttpClient) { }
  
  getHonor() : any {
    this.http.get<{honors: Honor[]}>('/api/honors').subscribe((Data) => {
        this.honors = Data.honors;
        this.honor = this.honors[0];
        
        this.honorsUpdated.next([...this.honors]);
      
    });
  }
  gethonorssUpdatedListener() {
    return this.honorsUpdated.asObservable();
  }

  addHonor(
    id: string,
    userAccount:String,//学生的id
    honorDate: String,
    prize:String,
    percentage:String,
    grantor: String,
  ){
    const honor: Honor = {
      _id: null,
      userAccount:userAccount,//学生的id
      honorDate: honorDate,
        prize:prize,
        percentage:percentage,
        grantor: grantor,
    };
    this.http.post('/api/honoradd', honor).subscribe((responseData) =>{
        this.honorS.push(honor);
        this.honorsUpdated.next([...this.honorS]);
    });
  }

  
}