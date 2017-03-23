import { Component, OnInit } from '@angular/core';
import { IEvent } from './event.interface';
import { EventsService } from './events.service';
@Component({
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers:[EventsService]
})
export class EventComponent implements OnInit {
  events: Array<IEvent>;
  constructor(private eventService:EventsService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  toggleEvent(eventi:any):void{
    eventi.toggleEvent();
  }
}
