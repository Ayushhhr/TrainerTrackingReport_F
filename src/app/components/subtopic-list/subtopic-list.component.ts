import { Component } from '@angular/core';
import { SubTopic } from '../../models/SubTopic';
import { Observable, of } from 'rxjs';
import { TopicSubtopicServiceService } from '../../services/topic-subtopic-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subtopic-list',
  templateUrl: './subtopic-list.component.html',
  styleUrl: './subtopic-list.component.css'
})
export class SubtopicListComponent {
  public subtopics : Observable<SubTopic[]> = of([]);

  constructor(private service: TopicSubtopicServiceService, private router: Router)
  {
    
  }

  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this.subtopics = this.service.getAllSubtopics();
  }

  subtopicDetails(id : number)
  {
    this.router.navigate(['detailsSubtopic',id]);
  }
}
