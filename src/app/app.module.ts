import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegistService } from "./regist.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CourseComponent } from './course/course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlashdataComponent } from './flashdata/flashdata.component';
import { InsComponent } from './ins/ins.component';
import { MyCourseComponent } from './my-course/my-course.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CourseComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    FlashdataComponent,
    InsComponent,
    MyCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RegistService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
