import { Component } from '@angular/core';
import { Topic } from '../../models/Topic';
import { Observable, of } from 'rxjs';
import { TopicSubtopicServiceService } from '../../services/topic-subtopic-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css'
})
export class TopicListComponent {
  public topics : Observable<Topic[]> = of([]);

  constructor(private service: TopicSubtopicServiceService, private router: Router)
  {
    
  }

  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this.topics = this.service.getAllTopics();
  }

  topicDetails(id : number)
  {
    this.router.navigate(['detailsTopicSubtopic',id]);
  }
}
