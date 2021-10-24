import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {LoginComponent} from './login/login.component';
import {AdminmainpageComponent} from './adminmainpage/adminmainpage.component'
import { HotelViewComponent } from './hotel/hotel-view/hotel-view.component';
import { HotelDetailComponent} from './hotel/hotel-detail/hotel-detail.component';
import { HotelBookComponent } from './hotel/hotel-book/hotel-book.component';
import { HotelAddComponent } from './hotel/hotel-add/hotel-add.component';
import {HMmainComponent} from './hmmain/hmmain.component';
import {HmmodifypassComponent} from './hmmodifypass/hmmodifypass.component';
import {HmmodifypasssuccComponent} from './hmmodifypasssucc/hmmodifypasssucc.component';
import {HmmanageComponent} from './hmmanage/hmmanage.component';
import { AdminComponent } from './admin/admin.component';
import {HmcompComponent} from './hmcomp/hmcomp.component';
import {HmorderComponent} from './hmorder/hmorder.component';
import { AdminHotelComponent } from './admin-hotel/admin-hotel.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { OrderViewComponent } from './hotel/order-view/order-view.component';
import { HmregisterComponent} from './hmregister/hmregister.component';
import {HmstudentComponent} from './hmstudent/hmstudent.component';
import {HmaddschoolComponent} from './hmaddschool/hmaddschool.component';
import {HmschoolComponent} from './hmschool/hmschool.component';
import {HmoschoolComponent} from './hmoschool/hmoschool.component';
import {HmordersearchComponent} from './hmordersearch/hmordersearch.component';
import {HmblogComponent} from './hmblog/hmblog.component';
import {HmstudentrecComponent} from './hmstudentrec/hmstudentrec.component';

import {StudentmainComponent} from './studentmain/studentmain.component';
import {StudentaddrecommComponent} from './studentaddrecomm/studentaddrecomm.component';
import {StudentinfoComponent} from './studentinfo/studentinfo.component';
import {StudentrecComponent} from './studentrec/studentrec.component';
import {StudentschoolComponent} from './studentschool/studentschool.component';
import {MainclassComponent} from './mainclass/mainclass.component';
import {MainblogComponent} from './mainblog/mainblog.component';
import {StudyabroadComponent} from './studyabroad/studyabroad.component';
import {ApplymasterComponent} from './applymaster/applymaster.component';
import {ApplybachelorComponent} from './applybachelor/applybachelor.component';
import {ApplyhighschoolComponent} from './applyhighschool/applyhighschool.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  {path: 'mainpage', component:MainpageComponent},
  {path: 'mainclass', component:MainclassComponent},
  {path: 'mainblog', component:MainblogComponent},
  {path: 'studyabroad', component:StudyabroadComponent},
  {path: 'applymaster', component:ApplymasterComponent},
  {path: 'applybachelor', component:ApplybachelorComponent},
  {path: 'applyhighschool', component:ApplyhighschoolComponent},

  {path: 'login', component:LoginComponent},
  {path: 'adminmainpage', component:AdminmainpageComponent},
  {path: 'hmmain', component:HMmainComponent},
  {path: 'hmmodifypass', component:HmmodifypassComponent},
  {path: 'hmmodifypasssucc', component:HmmodifypasssuccComponent},
  {path: 'hmmanage', component:HmmanageComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'adminhotel',component:AdminHotelComponent},
  { path: 'hoteldetail', component: HotelDetailComponent },
  { path: 'hotels', component: HotelViewComponent },
  { path: 'hotelbook', component: HotelBookComponent },
  { path: 'hoteladd', component: HotelAddComponent },
  { path: 'hmcomp', component: HmcompComponent },
  { path: 'hmorder', component: HmorderComponent },
  { path: 'adminorder', component:AdminOrderComponent},
  { path: 'hmblog', component: HmblogComponent},
  
  { path: 'hmregister', component: HmregisterComponent},
  { path: 'hmstudent', component: HmstudentComponent},
  { path: 'hmstudentrec', component: HmstudentrecComponent},
  { path: 'hmaddschool', component: HmaddschoolComponent},
  { path: 'hmschool', component:HmschoolComponent},
  { path: 'hmoschool', component:HmoschoolComponent},
  { path: 'hmordersearch', component:HmordersearchComponent},
  { path: 'hmordersearch', component:HmordersearchComponent},

  { path: 'studentmain', component:StudentmainComponent},
  { path: 'studentaddrecomm', component:StudentaddrecommComponent},
  { path: 'studentinfo', component:StudentinfoComponent},
  { path: 'studentrec', component:StudentrecComponent},
  { path: 'studentschool', component:StudentschoolComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
