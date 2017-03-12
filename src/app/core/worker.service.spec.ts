/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkerService } from './worker.service';

describe('WorkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkerService]
    });
  });

  it('should ...', inject([WorkerService], (service: WorkerService) => {
    expect(service).toBeTruthy();
  }));
});
