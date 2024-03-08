import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../../services/profile-service.service';
import { Profile } from '../../models/Profile';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router,private service: ProfileServiceService)
  {
    
  }

  id : number = 0;
  profile : Profile = new Profile();
  ngOnInit()
  {
    this.profile = new Profile();

    this.id = this.route.snapshot.params['id'];

    this.service.getOneProfile(this.id).subscribe((data) =>{
      console.log(data);
      this.profile = data;
    })
  }
  list()
  {
    this.router.navigate(['listProfile']);
  }

  profileDetails(id : string)
  {
    return this.service.getOneProfile(Number(id)).subscribe((data) =>{
      this.profile = data;
      console.log(data);
      console.log(this.profile);
      
    })
  }

}
