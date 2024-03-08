import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchTrainerServiceService {

  baseUrl = "http://localhost:8088";

  constructor(private http:HttpClient)
  {

  }
  getOneBatch(id : number): Observable <any>
  {
    console.log("inside service get one batch");
    return this.http.get(`${this.baseUrl}/batch/getOne/${id}`)
  }

  getOneTrainer(id : number): Observable <any>
  {
    console.log("inside service get one trainer");
    return this.http.get(`${this.baseUrl}/trainer/getOne/${id}`)
  }

  getAllBatches():any
  {
    return this.http.get(`${this.baseUrl}/batch/getAll`);
  }

  getAllTrainers():any
  {
    return this.http.get(`${this.baseUrl}/trainer/getAll`);
  }
  
  addBatch(batch: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/batch/add`,batch);
  }

  addTrainer(trainer: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/trainer/add`,trainer);
  }

}
