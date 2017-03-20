import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from './events.service'
import { IEvent } from './event.interface';


@Component({
    templateUrl: 'addEvent.component.html',
    styleUrls: ['addEvent.component.css'],
    providers:[EventsService]
})
export class AddEvent {
    title: string = "Add New Event Form";

    constructor(private router: Router, private eventsService:EventsService) { }

    exitForm(): void {
        this.router.navigate(['Event/Events']);
    }

    addEvent(formValues): void {
        let endDate: Date = new Date(formValues.endDate);
        let event: IEvent = formValues;
        this.eventsService.addEvent(event);
        this.router.navigate(['Event/Events']);
    }

    checkForm(formObj){
        console.log(formObj);
    }
}