import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Blog } from './blog.model';

@Injectable({providedIn: 'root'})
export class BlogService {

  //声明 变量信息
  private blogs : Blog[] = [];
  private blog : Blog;
  private blogS : Blog[] = [];
  private blogsUpdated = new Subject<Blog[]>();


  constructor(private http: HttpClient) { }
  
  getActivity() : any {
    this.http.get<{blogs: Blog[]}>('http://localhost:3000/blogs').subscribe((Data) => {
        this.blogs = Data.blogs;
        this.blog = this.blogs[0];
        
        this.blogsUpdated.next([...this.blogs]);
      
    });
  }
  getblogsUpdatedListener() {
    return this.blogsUpdated.asObservable();
  }

  addBlog(
    id: string,
    blogTitle:String,//标题
    blogSubtitle: String,//副标题
    blogTime:String,//发布日期
    blogPicture:String,//图片
    blogLink: String,//link
    countNumber:String,
  ){
    const blog: Blog = {
      _id: null,
      blogTitle:blogTitle,//标题
      blogSubtitle: blogSubtitle,//副标题
      blogTime:blogTime,//发布日期
      blogPicture:blogPicture,//图片
      blogLink: blogLink,//link
      countNumber:countNumber,
    };
    this.http.post('http://localhost:3000/blogadd', blog).subscribe((responseData) =>{
        this.blogS.push(blog);
        this.blogsUpdated.next([...this.blogS]);
    });
  }

  
}