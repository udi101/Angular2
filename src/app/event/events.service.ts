
import { Injectable } from '@angular/core';
import { IEvent } from './event.interface';
@Injectable()
export class EventsService {

    constructor() { }
    getEvents():Array<IEvent>{
        return EVENTS;
    }
    // הוספה של אירוע חדש לרשימת האירועים
    addEvent(event:IEvent):void{
        EVENTS.push(event);
    }
}

const EVENTS: Array<IEvent> = [
    {
        eventName: 'Mother\'s Birthday',
        startDate: new Date('02/02/2012'),
        endDate: new Date('02/02/2012'),
        eventPrice:160,
        location:{
            city:'Tel-Aviv',
            street: 'Arlozerov',
            streetNumber: 5
        }
    },
    {
        eventName: 'RXJS Congress',
        startDate: new Date('02/28/1947'),
        endDate: new Date('03/01/2017'),
        eventPrice:120,
        location: {
            city: 'Tel-Aviv',
            street: 'LaGuardia',
            streetNumber: 7
        }
    },
    {
        eventName: 'Job Interview tips',
        startDate: new Date('02/03/2017'),
        endDate: new Date('03/03/2017'),
        eventPrice:150,
        location: {
            city: 'Holon',
            street: 'Hamelacha',
            streetNumber: 6
        }
    }
]