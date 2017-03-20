import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';  // forms, reactive, common

// Components
import { EventComponent } from './event.component';
import { AddEvent } from './addEvent.component';
import { AddReactiveComponent } from './addReactive.component';

@NgModule({
    declarations: [
        EventComponent,
        AddEvent,
        AddReactiveComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'Events', component: EventComponent },
            { path: 'Add_Event', component: AddEvent },
            { path: 'Add_Reactive', component: AddReactiveComponent }
        ])
    ],
    exports: [],
    providers: []
})
export class EventsModule { }