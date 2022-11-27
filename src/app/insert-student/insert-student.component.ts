import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.css']
})
export class InsertStudentComponent {
  constructor(private api:ApiStudentService ,private __actRou:ActivatedRoute, private router:Router){}
  id=-1;
  btnvalue="INSERT"
  
  myForm = new FormGroup({
    PrinterName: new FormControl(''),
    PrinterModel:new FormControl(''),
    PrinterMaker:new FormControl(''),
    PrinterImage:new FormControl(''),
    PrinterDecription:new FormControl(''),
    PrinterPrice:new FormControl('')
   })

   ngOnInit(){
    if(this.__actRou.snapshot.params['id']!=null)
    {
       this.btnvalue="UPDATE"
       this.id=this.__actRou.snapshot.params['id'];
       this.api.getStudentById(this.id).subscribe((res:any)=>{
       this.myForm.controls.PrinterName.setValue(res.PrinterName);
       this.myForm.controls.PrinterPrice.setValue(res.PrinterPrice);
       this.myForm.controls.PrinterDecription.setValue(res.PrinterDecription);
       this.myForm.controls.PrinterMaker.setValue(res.PrinterMaker);
       this.myForm.controls.PrinterModel.setValue(res.PrinterModel);
       this.myForm.controls.PrinterImage.setValue(res.PrinterImage);
     })
   }
   
   } 


  
  insert(){
  if(this.id>0){
    this.api.update(this.id,this.myForm.value).subscribe((res)=>{
      this.router.navigate(['/printers']);
    })
  }
  else{
    console.log(this.myForm.value);
    this.api.insert(this.myForm.value).subscribe((res)=>{this.router.navigate(['/printers'])})
  }
  }
  }

