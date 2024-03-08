import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerCourseServiceService {

  baseUrl = "http://localhost:8088"

  constructor(private http:HttpClient)
  {

  }

  getOneTrainer(id : number): Observable <any>
  {
    console.log("inside service get one trainer");
    return this.http.get(`${this.baseUrl}/trainer/getOne/${id}`)
  }

  getOneCourse(id : number): Observable <any>
  {
    console.log("inside service get one topic");
    return this.http.get(`${this.baseUrl}/course/getOne/${id}`)
  }

  getAllTrainers():any
  {
    return this.http.get(`${this.baseUrl}/trainer/getAll`);
  }

  getAllCourses():any
  {
    return this.http.get(`${this.baseUrl}/courses/getAll`);
  }
  
  addTrainer(trainer: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/trainer/add`,trainer);
  }

  addCourse(course: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/courses/add`,course);
  }
}
