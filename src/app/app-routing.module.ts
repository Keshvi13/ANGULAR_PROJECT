import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArraycurdComponent } from './arraycurd/arraycurd.component';
import { StudentsComponent } from './students/students.component';
import { HeaderComponent } from './header/header.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { InsertStudentComponent } from './insert-student/insert-student.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'arraycurd',component:ArraycurdComponent},
  {path:'printers',component:StudentsComponent},
  {path:'printer/insert',component:InsertStudentComponent},
  {path:'printer/update/:id',component:InsertStudentComponent},
  {path:"printer/:id",component:DetailStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
