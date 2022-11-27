import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  data:Student[]=[];
  constructor(private api:ApiStudentService , private router:Router){}

  ngOnInit(){
    this.api.getAllStudents().subscribe((res:any)=>{
      this.data=res;
      console.log(this.data)
    });
  }
   
   delete(id:any){
   this.api.delete(id).subscribe((res)=>{this.ngOnInit();})
   }

  
}
