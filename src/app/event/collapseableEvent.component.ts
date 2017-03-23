import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapseable-event',
    templateUrl: './collapseableEvent.component.html',
    styleUrls:['./collapseableEvent.component.css']
})
export class CollapseableEventComponent {
    isContentVisible:boolean = true;
    @Input() eventName:string;

    toggleEvent():void{
        this.isContentVisible = !this.isContentVisible;
    }
}