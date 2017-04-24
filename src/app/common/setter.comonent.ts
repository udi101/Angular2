import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './setter.component.html',
    styleUrls: ['./setter.component.css']
})
export class SetterComponent {
    @Input() set titleSetter(val) {
        this.title = val;
    };
    title: string = null;
}