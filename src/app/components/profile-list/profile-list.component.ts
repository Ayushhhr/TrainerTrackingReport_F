import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../../models/Profile';
import { Router } from '@angular/router';
import { ProfileServiceService } from '../../services/profile-service.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.css'
})
export class ProfileListComponent {
  public prfiles : Observable<Profile[]> = of([]);
  profiles: any;

  constructor(private service: ProfileServiceService, private router : Router)
  {

  }

  ngOnInit()
  {
    this.getAll();
  }
  getAll()
  {
    this.profiles = this.service.getAllProfiles();
  }
  profileDetails(id : number)
  {
    this.router.navigate(['detailsProfile',id]);
  }
}
