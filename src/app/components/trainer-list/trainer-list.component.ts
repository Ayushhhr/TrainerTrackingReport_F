import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trainer } from '../../models/Trainer';
import { Router } from '@angular/router';
import { TrainerCourseServiceService } from '../../services/trainer-course-service.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrl: './trainer-list.component.css'
})
export class TrainerListComponent {
  public trainers : Observable<Trainer[]> = of([]);

  constructor(private service: TrainerCourseServiceService, private router: Router)
  {
    
  }

  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this.trainers = this.service.getAllTrainers();
  }

  trainerDetails(id : number)
  {
    this.router.navigate(['detailsTrainerCourse',id]);
  }
}
