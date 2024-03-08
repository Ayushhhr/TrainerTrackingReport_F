import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicSubtopicDetailsComponent } from './components/topic-subtopic-details/topic-subtopic-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddSubtopicComponent } from './components/add-subtopic/add-subtopic.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseTopicDetailsComponent } from './components/course-topic-details/course-topic-details.component';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerCourseDetailsComponent } from './components/trainer-course-details/trainer-course-details.component';
import { BatchListComponent } from './components/batch-list/batch-list.component';
import { BatchTrainerDetailsComponent } from './components/batch-trainer-details/batch-trainer-details.component';
import { DashboardTrainerComponent } from './components/dashboard-trainer/dashboard-trainer.component';
import { SubtopicListComponent } from './components/subtopic-list/subtopic-list.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicSubtopicDetailsComponent,
    NavbarComponent,
    AddSubtopicComponent,
    AddTopicComponent,
    TopicListComponent,
    CourseListComponent,
    CourseTopicDetailsComponent,
    TrainerListComponent,
    TrainerCourseDetailsComponent,
    BatchListComponent,
    BatchTrainerDetailsComponent,
    DashboardTrainerComponent,
    SubtopicListComponent,
    ProfileListComponent,
    ProfileDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
