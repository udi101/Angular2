import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IWorker } from './../interfaces/worker.interface';
import { WorkerService } from './../core/worker.service'

@Component({
    selector: 'workerList',
    templateUrl: 'workerList.component.html',
    styleUrls: ['WorkerList.component.css']
})
export class WorkerListComponent implements OnInit{
    workers: Array<IWorker> = [];
    workerName: string = "Udi Mazor";
    workerAge: number = 36;

    constructor(private router: Router, 
                private workerService: WorkerService,
                private activatedRoute:ActivatedRoute) { }

    ngOnInit() {
        this.workers = this.activatedRoute.snapshot.data['workers']; // טוען נתונים מתוך הריזולב
    }
    

    // פןנקציה שמגדילה את גיל העבוד בשנה
    increaseAge() {
        this.workers.find(x => x.workerName == "Udi Mazor").workerAge++;
    }
    
    // פןנקציה שמפחיתה את גיל העבוד בשנה
    decreaseAge() {
        this.workers.find(x => x.workerName == "Udi Mazor").workerAge--;
    }

    // ניווט באמצעות קוד
    GoToWorker3() {
        this.router.navigate(['Worker', 3]);
    }
    // פונקציה לקביעת גיל העובד
    setAge(age: number): void {
        this.workers.find(x => x.workerName == "Udi Mazor").workerAge = 15;
    }
}