import { Component } from '@angular/core';
import { IWorker } from './../interfaces/worker.interface';
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs/Subject';
@Component({
    selector: 'workerContainer',
    templateUrl: 'workerContainer.component.html',
    styleUrls: ['./workerContainer.component.css']
})

export class WorkerContainerComponent {
    id:number;
    title: string = null;
    isDirty:boolean = true;
    constructor(private route:ActivatedRoute){}

    ngOnInit(){
        this.id = this.route.snapshot.params['id'];
    }

    setWorkerAge(tt: any): void {
        let _worker: IWorker = tt.workers.find(x => x.workerName == "Udi Mazor");
        _worker.workerAge = 6;
    }

}