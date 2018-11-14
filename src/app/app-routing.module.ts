import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CourseComponent } from "./course/course.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { InsComponent } from "./ins/ins.component";
import { MyCourseComponent } from "./my-course/my-course.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'ins',
    component: InsComponent
  },
  {
    path: 'myCourse',
    component: MyCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Routing = [
  MainComponent, CourseComponent, LoginComponent, RegisterComponent, InsComponent,
  MyCourseComponent
]
