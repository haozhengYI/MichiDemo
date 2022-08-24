import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Task } from './task.model';

@Injectable({providedIn: 'root'})
export class TaskService {

  //声明 变量信息
  private tasks : Task[] = [];
  private task : Task;
  private taskS : Task[] = [];
  private tasksUpdated = new Subject<Task[]>();


  constructor(private http: HttpClient) { }
  
  getTask() : any {
    this.http.get<{tasks: Task[]}>('http://localhost:3000/tasks').subscribe((Data) => {
        this.tasks = Data.tasks;
        this.task = this.tasks[0];
        
        this.tasksUpdated.next([...this.tasks]);
      
    });
  }
  gettasksUpdatedListener() {
    return this.tasksUpdated.asObservable();
  }

  addTask(
    id: string,
    userAccount:String,//学生的id
    studentname:String,//学生名字
    assigned:String,// 被Assigned人信息
    content: String,//进度内容
    tdate:String,//进度日期
    tstate:String,//进度状态（"完成/未完成"）
    ttype:String,//进度类型（"紧急/一般/比较紧急"）
  ){
    const task: Task = {
      _id: null,
      userAccount:userAccount,//学生的id
        studentname:studentname,//学生名字
        assigned:assigned,// 被Assigned人信息
        content: content,//进度内容
        tdate:tdate,//进度日期
        tstate:tstate,//进度状态（"完成/未完成"）
        ttype:ttype,//进度类型（"紧急/一般/比较紧急"）
    };
    this.http.post('http://localhost:3000/taskadd', task).subscribe((responseData) =>{
        this.taskS.push(task);
        this.tasksUpdated.next([...this.taskS]);
    });
  }

  
}