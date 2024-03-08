import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Batch } from '../../models/Batch';
import { Router } from '@angular/router';
import { BatchTrainerServiceService } from '../../services/batch-trainer-service.service';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent {
  public batches : Observable<Batch[]> = of([]);

  constructor(private service: BatchTrainerServiceService, private router : Router)
  {

  }

  ngOnInit()
  {
    this.getAll();
  }
  getAll()
  {
    this.batches = this.service.getAllBatches();
  }
  batchDetails(id : number)
  {
    this.router.navigate(['detailsBatchTrainer',id]);
  }
}
