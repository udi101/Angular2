import { Injectable } from '@angular/core';
import { IWorker } from './../interfaces/worker.interface';
import { Subject } from 'rxjs';

@Injectable()
export class WorkerService {
  constructor() { }
  getworkers(){
    return workerList;
  }
}

// רשימת העובדים
const workerList: Array<IWorker> = [
  { workerName: 'Udi Mazor', workerAge: 42 },
  { workerName: 'Mazal Mazor', workerAge: 31 },
  { workerName: 'Michal Levi', workerAge: 24 }
]