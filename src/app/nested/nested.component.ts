import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NestedService } from './nested.service';

@Component({
    templateUrl: './nested.component.html',
    providers:[NestedService]
})

export class NestedComponent implements OnInit {
    title:string = "test";
    @Output() test = new EventEmitter();
    constructor(private nestedService:NestedService) { }
    ngOnInit() { 
        this.nestedService.getName().subscribe(
            data => this.title = data,
            error => console.log(error)
        )
    }

    setCals(){
        this.test.emit("test");
    }
}


