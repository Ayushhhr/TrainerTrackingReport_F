import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../../models/Course';
import { Router } from '@angular/router';
import { CourseTopicServiceService } from '../../services/course-topic-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  public courses : Observable<Course[]> = of([]);

  constructor(private service: CourseTopicServiceService, private router : Router)
  {

  }

  ngOnInit()
  {
    this.getAll();
  }
  getAll()
  {
    this.courses = this.service.getAllCourses();
  }
  courseDetails(id : number)
  {
    this.router.navigate(['detailsCourseTopic',id]);
  }

}
