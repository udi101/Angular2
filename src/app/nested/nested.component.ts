import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
@Component({
    templateUrl: './nested.component.html'
    // styleUrls: ['./nested.component.css']
})

export class NestedComponent implements OnInit {
    @Input() name: string;
    @Output() changeName = new EventEmitter();

    constructor() { }
    ngOnInit() {
        this.name = "udi mazor";
    }

    click(name:string){
        this.changeName.emit(name);
    }
}