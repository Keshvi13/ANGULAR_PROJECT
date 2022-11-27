import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent {
 id=0;
 data:Student=new Student();
 constructor(private __actRoute:ActivatedRoute , private __api:ApiStudentService ,private router:Router){}
 ngOnInit(){
  this.id=this.__actRoute.snapshot.params['id'];
  this.__api.getStudentById(this.id).subscribe((res:any)=>{this.data=res})
 }

 delete(){
  this.__api.delete(this.id).subscribe((res)=>{this.router.navigate(['/printers'])})
 }

//  opensweetalert(){
//   Swal.fire({  
//     title: 'Do you want to save the changes?',  
//     showDenyButton: true,  showCancelButton: true,  
//     confirmButtonText: `delete`,  
//     denyButtonText: `Don't delete`,
//   }).then((result) => {  
//     /* Read more about isConfirmed, isDenied below */  
//       if (result.isConfirmed) {    
//         Swal.fire('Saved!', '', 'success')  
//       } else if (result.isDenied) {    
//         Swal.fire('Changes are not saved', '', 'info')  
//      }
//   });
//  }
}
