import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseTopicServiceService {

  baseUrl = "http://localhost:8088";

  constructor(private http:HttpClient)
  {

  }
  getOneCourse(id : number): Observable <any>
  {
    console.log("inside service get one course");
    return this.http.get(`${this.baseUrl}/courses/getOne/${id}`)
  }

  getOneTopic(id : number): Observable <any>
  {
    console.log("inside service get one topic");
    return this.http.get(`${this.baseUrl}/topic/getOne/${id}`)
  }

  getAllCourses():any
  {
    return this.http.get(`${this.baseUrl}/courses/getAll`);
  }

  getAllTopics():any
  {
    return this.http.get(`${this.baseUrl}/topic/getAll`);
  }
  
  addCourse(course: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/courses/add`,course);
  }

  addTopic(topic: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/topic/add`,topic);
  }


}
