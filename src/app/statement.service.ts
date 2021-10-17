import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Statement } from './statement.model';

@Injectable({providedIn: 'root'})
export class StatementService {

  //声明 变量信息
  private statements : Statement[] = [];
  private statement : Statement;
  private statementS : Statement[] = [];
  private statementsUpdated = new Subject<Statement[]>();


  constructor(private http: HttpClient) { }
  
  getStatement() : any {
    this.http.get<{statements: Statement[]}>('http://localhost:3000/statements').subscribe((Data) => {
        this.statements = Data.statements;
        this.statement = this.statements[0];
        
        this.statementsUpdated.next([...this.statements]);
      
    });
  }
  getstatementsUpdatedListener() {
    return this.statementsUpdated.asObservable();
  }

  addStatement(
    id: string,
    schoolID:String, //对应申请学校的id
    question: String,//题目内容
    stype:String,//文书种类(PS/SOP/Essay)
    words:String,//字数
  ){
    const statement: Statement = {
      _id: null,
      schoolID:schoolID, //对应申请学校的id
        question: question,//题目内容
        stype:stype,//文书种类(PS/SOP/Essay)
        words:words,//字数
    };
    this.http.post('http://localhost:3000/statementadd', statement).subscribe((responseData) =>{
        this.statementS.push(statement);
        this.statementsUpdated.next([...this.statementS]);
    });
  }

  
}