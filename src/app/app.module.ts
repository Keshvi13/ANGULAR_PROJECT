import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import { ArraycurdComponent } from './arraycurd/arraycurd.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import{ HttpClientModule} from '@angular/common/http';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { InsertStudentComponent } from './insert-student/insert-student.component';
@NgModule({
  declarations: [
    AppComponent,
    ArraycurdComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    StudentsComponent,
    DetailStudentComponent,
    InsertStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
