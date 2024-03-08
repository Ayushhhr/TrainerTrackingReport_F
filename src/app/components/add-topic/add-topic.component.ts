import { Component } from '@angular/core';
import { TopicSubtopicServiceService } from '../../services/topic-subtopic-service.service';
import { Router } from '@angular/router';
import { SubTopic } from '../../models/SubTopic';
import { Topic } from '../../models/Topic';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrl: './add-topic.component.css'
})
export class AddTopicComponent {
  submitted = false;

  constructor(private service: TopicSubtopicServiceService, private router: Router)
  {

  }

  topic : Topic = new Topic();

  onSubmit()
  {
    this.save();
    this.submitted = true;
  }

  save()
  {
    this.service.addTopic(this.topic).subscribe();
  }
}
