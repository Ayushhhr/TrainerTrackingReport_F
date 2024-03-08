import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  baseUrl = "http://localhost:8088";

  constructor(private http:HttpClient)
  {

  }
  getOneProfile(id : number): Observable <any>
  {
    console.log("inside service get one profile");
    return this.http.get(`${this.baseUrl}/profile/getOne/${id}`)
  }
  getAllProfiles():any
  {
    return this.http.get(`${this.baseUrl}/profile/getAll`);
  }

  addProfile(profiles: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/profile/add`,profiles);
  }

}
