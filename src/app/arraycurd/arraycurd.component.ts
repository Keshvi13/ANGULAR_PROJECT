import { Component } from '@angular/core';
import { Faculty } from '../faculty';
import { FormGroup, FormControl } from '@angular/forms';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-arraycurd',
  templateUrl: './arraycurd.component.html',
  styleUrls: ['./arraycurd.component.css']
})
export class ArraycurdComponent {

faculties:Faculty[]=[];
  idToEdit=-1;
  myForm = new FormGroup({
                          NAME:new FormControl('',Validators.required),
                          PASSWORD: new FormControl('')
                        })
  insert(){
    if(this.idToEdit<0){
      this.faculties.push(<Faculty>this.myForm.value);
    }
    else{
      this.faculties[this.idToEdit]=<Faculty>this.myForm.value
    }

    this.myForm.controls.NAME.setValue('');
    this.myForm.controls.PASSWORD.setValue('');
    this.idToEdit=-1;
  }    
  
  delete(i:any){
    this.faculties.splice(i,1);
  }

  update(i:any){
    this.idToEdit=i;
    this.myForm.controls.NAME.setValue(this.faculties[i].NAME);
    this.myForm.controls.PASSWORD.setValue(this.faculties[i].PASSWORD);
  }

}