import { Injectable } from '@angular/core';
import { CanActivate, Resolve } from '@angular/router';
import {IWorker} from './../interfaces/worker.interface'
import {WorkerService} from './worker.service';

@Injectable()
export class RouteGuardService implements CanActivate, Resolve<Array<IWorker>> {

  constructor(private workerService:WorkerService) { }

  canActivate(): boolean {
    return true;
  }
  
  resolve():Array<IWorker>{
    return this.workerService.getworkers().map(workers => workers);
  }
}