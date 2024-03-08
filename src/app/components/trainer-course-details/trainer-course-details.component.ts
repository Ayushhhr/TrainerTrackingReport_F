import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainerCourseServiceService } from '../../services/trainer-course-service.service';
import { Trainer } from '../../models/Trainer';

@Component({
  selector: 'app-trainer-course-details',
  templateUrl: './trainer-course-details.component.html',
  styleUrl: './trainer-course-details.component.css'
})
export class TrainerCourseDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router,private service: TrainerCourseServiceService)
  {
    
  }

  id : number = 0;
  trainer : Trainer = new Trainer();
  visit : boolean = true;
  ngOnInit()
  {
    this.trainer = new Trainer();

    this.id = this.route.snapshot.params['id'];

    this.service.getOneTrainer(this.id).subscribe((data) =>{
      console.log(data);
      this.trainer = data;
    })
  }
  list()
  {
    this.router.navigate(['listTrainer']);
  }

  trainerDetails(id : string)
  {
    return this.service.getOneTrainer(Number(id)).subscribe((data) =>{
      this.trainer = data;
      console.log(data);
      console.log(this.trainer);

      this.visit = true;
    })
  }

}
