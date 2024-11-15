import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';

import { HMmainComponent } from './hmmain/hmmain.component';
import { HmmodifypassComponent } from './hmmodifypass/hmmodifypass.component';
import { HmmodifypasssuccComponent } from './hmmodifypasssucc/hmmodifypasssucc.component';
import { HmmanageComponent } from './hmmanage/hmmanage.component';
import { HmmanagedComponent } from './hmmanaged/hmmanaged.component';

import { AdminComponent } from './admin/admin.component';
// import { FullCalendarModule } from '@fullcalendar/angular'; 
// import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// View All Hotels
import { HotelViewComponent } from './hotel/hotel-view/hotel-view.component';
// View Details of Hotel
import { HotelDetailComponent } from './hotel/hotel-detail/hotel-detail.component';
// Book A Hotel
import { HotelBookComponent } from './hotel/hotel-book/hotel-book.component';
// Add A Hotel
import { HotelAddComponent } from './hotel/hotel-add/hotel-add.component';
import { AdminmainpageComponent } from './adminmainpage/adminmainpage.component';
import { HmcompComponent } from './hmcomp/hmcomp.component';
import { HmorderComponent } from './hmorder/hmorder.component';
import { AdminHotelComponent } from './admin-hotel/admin-hotel.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { OrderViewComponent} from './hotel/order-view/order-view.component';
import { HmregisterComponent } from './hmregister/hmregister.component';
import { HmstudentComponent} from './hmstudent/hmstudent.component';
import {HmaddschoolComponent} from './hmaddschool/hmaddschool.component';
import {HmschoolComponent} from './hmschool/hmschool.component';
import {HmoschoolComponent} from './hmoschool/hmoschool.component';
import {HmordersearchComponent} from './hmordersearch/hmordersearch.component';
import {HmblogComponent} from './hmblog/hmblog.component';
import {HmstudentrecComponent} from './hmstudentrec/hmstudentrec.component';
import {HmtaskComponent} from './hmtask/hmtask.component';

import {StudentmainComponent} from './studentmain/studentmain.component';
import {StudentaddrecommComponent} from './studentaddrecomm/studentaddrecomm.component';
import {StudentinfoComponent} from './studentinfo/studentinfo.component';
import {StudentrecComponent} from './studentrec/studentrec.component';
import {StudentresComponent} from './studentresume/studentresume.component';
import {StudentschoolComponent} from './studentschool/studentschool.component';
import {MainclassComponent} from './mainclass/mainclass.component';
import {MainblogComponent} from './mainblog/mainblog.component';
import {StudyabroadComponent} from './studyabroad/studyabroad.component';
import {ApplymasterComponent} from './applymaster/applymaster.component';
import {ApplybachelorComponent} from './applybachelor/applybachelor.component';
import {ApplyhighschoolComponent} from './applyhighschool/applyhighschool.component';

// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,

// ]);

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    MainclassComponent,
    MainblogComponent,
    StudyabroadComponent,
    ApplymasterComponent,
    ApplybachelorComponent,
    ApplyhighschoolComponent,
    LoginComponent,
    HMmainComponent,
    HmmodifypassComponent,
    HmmodifypasssuccComponent,
    HmmanageComponent,
    HmmanagedComponent,
    AdminComponent,
    HotelViewComponent,
    HotelDetailComponent,
    HotelBookComponent,
    HotelAddComponent,


    AdminmainpageComponent,

    HmcompComponent,

    AdminmainpageComponent,

    HmorderComponent,

    AdminHotelComponent,

    AdminOrderComponent,

    OrderViewComponent,
    HmregisterComponent,
    HmstudentComponent,
    HmaddschoolComponent,
    HmschoolComponent,
    HmoschoolComponent,
    HmordersearchComponent,
    HmblogComponent,
    HmstudentrecComponent,
    HmtaskComponent,

    StudentmainComponent,
    StudentaddrecommComponent,
    StudentinfoComponent,
    StudentresComponent,
    StudentrecComponent,
    StudentschoolComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //FullCalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
