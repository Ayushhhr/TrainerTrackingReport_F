import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubtopicComponent } from './components/add-subtopic/add-subtopic.component';
import { TopicSubtopicDetailsComponent } from './components/topic-subtopic-details/topic-subtopic-details.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseTopicDetailsComponent } from './components/course-topic-details/course-topic-details.component';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerCourseDetailsComponent } from './components/trainer-course-details/trainer-course-details.component';
import { BatchListComponent } from './components/batch-list/batch-list.component';
import { BatchTrainerDetailsComponent } from './components/batch-trainer-details/batch-trainer-details.component';
import { SubtopicListComponent } from './components/subtopic-list/subtopic-list.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';

const routes: Routes = [
{
  path:'listTopic',
  component: TopicListComponent
},
{
  path:'listCourse',
  component: CourseListComponent
},
{
  path:'listTrainer',
  component: TrainerListComponent
},
{
  path:'listBatch',
  component: BatchListComponent
},
{
  path:'listSubtopic',
  component: SubtopicListComponent
},
{
  path:'listProfile',
  component: ProfileListComponent
},
{
  path:'add',
  component: AddSubtopicComponent
},
{
  path:'getOne/:sid',
  component: TopicSubtopicDetailsComponent
},
{
  path:'getOne/:tid',
  component: TopicSubtopicDetailsComponent
},
{
  path:'detailsTopicSubtopic/:tid',
  component: TopicSubtopicDetailsComponent
},
{
  path:'detailsTopicSubtopic/:sid',
  component: TopicSubtopicDetailsComponent
},
{
  path:'detailsCourseTopic/:cid',
  component: CourseTopicDetailsComponent
},
{
  path:'detailsTrainerCourse/:id',
  component: TrainerCourseDetailsComponent
},
{
  path:'detailsBatchTrainer/:bid',
  component: BatchTrainerDetailsComponent
},
{
  path:'detailsProfile/:id',
  component: ProfileDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
