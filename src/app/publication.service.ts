import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Publication } from './publication.model';

@Injectable({providedIn: 'root'})
export class PublicationService {

  //声明 变量信息
  private publications : Publication[] = [];
  private publication : Publication;
  private publicationS : Publication[] = [];
  private publicationsUpdated = new Subject<Publication[]>();


  constructor(private http: HttpClient) { }
  
  getPublication() : any {
    this.http.get<{publications: Publication[]}>('http://localhost:3000/publications').subscribe((Data) => {
        this.publications = Data.publications;
        this.publication = this.publications[0];
        
        this.publicationsUpdated.next([...this.publications]);
      
    });
  }
  getpublicationsUpdatedListener() {
    return this.publicationsUpdated.asObservable();
  }

  addPublication(
    id: string,
    userAccount:String,//学生的id
    PublicationTitle: String,
    PublicationJournal: String,//刊物
    PublicationDate: String,//时间
    PublicationLink: String,//链接
    PublicationAuthors: String,
    PublicationAbstract: String,
    PublicationLevel:String,
  ){
    const publication: Publication = {
      _id: null,
      userAccount:userAccount,//学生的id
        PublicationTitle: PublicationTitle,
        PublicationJournal: PublicationJournal,//刊物
        PublicationDate: PublicationDate,//时间
        PublicationLink: PublicationLink,//链接
        PublicationAuthors: PublicationAuthors,
        PublicationAbstract: PublicationAbstract,
        PublicationLevel:PublicationLevel,
    };
    this.http.post('http://localhost:3000/publicationadd', publication).subscribe((responseData) =>{
        this.publicationS.push(publication);
        this.publicationsUpdated.next([...this.publicationS]);
    });
  }

  
}