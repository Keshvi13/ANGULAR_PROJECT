import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InsertStudentComponent } from './insert-student/insert-student.component';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {

  constructor(private __http:HttpClient) { }
  apiurl='https://630e1d5db37c364eb7133650.mockapi.io/Printers'
  getAllStudents(){
    return this.__http.get(this.apiurl)
  }

  getStudentById(id:any){
    return this.__http.get(this.apiurl+'/'+id);  
  }

  delete(id:any){
    return this.__http.delete(this.apiurl+'/'+id); 
  }

  insert(from:any){
    return this.__http.post(this.apiurl,from);
  }

  update(id:any,form:any){
    return this.__http.put(this.apiurl+'/'+id ,form); 
  }
}
