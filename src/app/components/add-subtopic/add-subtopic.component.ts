import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubTopic } from '../../models/SubTopic';
import { TopicSubtopicServiceService } from '../../services/topic-subtopic-service.service';

@Component({
  selector: 'app-add-subtopic',
  templateUrl: './add-subtopic.component.html',
  styleUrl: './add-subtopic.component.css'
})
export class AddSubtopicComponent 
{
  submitted = false;

  constructor(private service: TopicSubtopicServiceService, private router: Router)
  {

  }

  subtopic = new SubTopic();

  onSubmit()
  {
    this.save();
    this.submitted = true;
  }

  save()
  {
    this.service.addSubtopic(this.subtopic).subscribe();
  }

}
