import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Experience } from './experience.model';

@Injectable({providedIn: 'root'})
export class ExperienceService {

  //声明 变量信息
  private experiences : Experience[] = [];
  private experience : Experience;
  private experienceS : Experience[] = [];
  private experiencesUpdated = new Subject<Experience[]>();


  constructor(private http: HttpClient) { }
  
  getExperience() : any {
    this.http.get<{experiences: Experience[]}>('/api/experiences').subscribe((Data) => {
        this.experiences = Data.experiences;
        this.experience = this.experiences[0];
        
        this.experiencesUpdated.next([...this.experiences]);
      
    });
  }
  getexperiencesUpdatedListener() {
    return this.experiencesUpdated.asObservable();
  }

  addExperience(
    id: string,
    userAccount:String,//学生的id
    type: String,//类型：教学科研/工作经历
    institution: String,
    institutionLocation:String,
    experienceStart:String,//经历起始日期
    experienceEnd:String,//经历结束日期
    experienceposition: String,
    responsibilities:String,
    project:String,
    achievement:String,
  ){
    const experience: Experience = {
      _id: null,
      userAccount:userAccount,//学生的id
      type: type,//类型：教学科研/工作经历
      institution: institution,
        institutionLocation:institutionLocation,
        experienceStart:experienceStart,//经历起始日期
        experienceEnd:experienceEnd,//经历结束日期
        experienceposition: experienceposition,
        responsibilities:responsibilities,
        project:project,
        achievement:achievement,
    };
    this.http.post('/api/experienceadd', experience).subscribe((responseData) =>{
        this.experienceS.push(experience);
        this.experiencesUpdated.next([...this.experienceS]);
    });
  }

  
}