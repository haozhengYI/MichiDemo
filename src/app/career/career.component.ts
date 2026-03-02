import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { BlockingProxy } from 'blocking-proxy';
import { UserService } from '../user.service';
import { ConstantPool } from '@angular/compiler';
import { user } from '../user.model';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getDefaultService } from 'selenium-webdriver/opera';
import { userInfo } from 'os';
import { ActivatedRoute,  NavigationExtras, Router } from '@angular/router';
import {HmService} from './../hm.service';
import {Student} from '../../app/st.model';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit, AfterViewInit {
  
  user: user[] = [];
  students: Student[] = [];
  studentID : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    public hmService: HmService,
    private http: HttpClient,
    private el: ElementRef) { }

   
  
  ngOnInit() {
    this.http.get<{user: user[]}>('http://localhost:3000/users').subscribe((userData) => {

    this.user = userData.user;
    //console.log(userData.user);
    //console.log(this.user.length);

    });
  }

  ngAfterViewInit() {
    // Scroll reveal: 元素进入视口时添加 .visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    this.el.nativeElement.querySelectorAll('.reveal').forEach((el: Element) => observer.observe(el));
  }

  toggleFaq(ev: Event) {
    const btn = ev.target as HTMLElement;
    const item = btn.closest('.faq-item');
    if (item) item.classList.toggle('open');
  }

  scrollToSection(sectionId: string) {
    const el = this.el.nativeElement.querySelector('#' + sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  //direct to the 王牌课程 page
  class() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       
      }
    };
    this.router.navigate(['/mainclass'], navigationExtras);
  }

  //direct to the Blog page
  blog() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       
      }
    };
    this.router.navigate(['/mainblog'], navigationExtras);
  }
  //direct to the 留学 page
  abroad() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
       
      }
    };
    this.router.navigate(['/studyabroad'], navigationExtras);
  }

}
