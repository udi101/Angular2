import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';  // forms, reactive, common

// Components
import { EventComponent } from './event.component';
import { CollapseableEventComponent } from './collapseableEvent.component';
import { AddEvent } from './addEvent.component';
import { AddReactiveComponent } from './addReactive.component';

// Pipes
import { StreetPipe } from './street.pipe';


@NgModule({
    declarations: [
        EventComponent,
        AddEvent,
        AddReactiveComponent,
        CollapseableEventComponent,
        StreetPipe,
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