import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Education } from './education.model';

@Injectable({providedIn: 'root'})
export class EducationService {

  //声明 变量信息
  private educations : Education[] = [];
  private education : Education;
  private educationS : Education[] = [];
  private educationsUpdated = new Subject<Education[]>();


  constructor(private http: HttpClient) { }
  
  getEducation() : any {
    this.http.get<{educations: Education[]}>('/api/educations').subscribe((Data) => {
        this.educations = Data.educations;
        this.education = this.educations[0];
        
        this.educationsUpdated.next([...this.educations]);
      
    });
  }
  getrecommendersUpdatedListener() {
    return this.educationsUpdated.asObservable();
  }

  addEducation(
    id: string,
    userAccount:String,//学生的id
    type: String,//类型：本科，研究生，高中
    educationName: String,
    educationLocation:String,
    educationStart:String,//在校起始日期
    educationEnd:String,//在校结束日期
    major: String,
    Degree:String,
    GPA:String,
    MajorGPA:String,//专业GPA
    SecondDegree:String,//双专业
    SecondGPA:String,//第二专业 GPA
    other:String,
  ){
    const education: Education = {
      _id: null,
      userAccount:userAccount,//学生的id
      type: type,//类型：本科，研究生，高中
      educationName: educationName,
      educationLocation:educationLocation,
      educationStart:educationStart,//在校起始日期
      educationEnd:educationEnd,//在校结束日期
      major: major,
      Degree:Degree,
      GPA:GPA,
      MajorGPA:MajorGPA,//专业GPA
      SecondDegree:SecondDegree,//双专业
      SecondGPA:SecondGPA,//第二专业 GPA
      other:other,
    };
    this.http.post('/api/educationadd', education).subscribe((responseData) =>{
        this.educationS.push(education);
        this.educationsUpdated.next([...this.educationS]);
    });
  }

  
}