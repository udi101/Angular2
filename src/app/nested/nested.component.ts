import { Component, OnInit, Output, EventEmitter,Inject } from '@angular/core';
import { NestedService } from './nested.service';
import { JQ_TOKEN } from './../common/jQuery.service';
// declare let jQuery: any;

@Component({
    templateUrl: './nested.component.html',
    providers: [NestedService]
})

export class NestedComponent implements OnInit {
    title: string = "test";
    @Output() test = new EventEmitter();

    constructor(private nestedService: NestedService,
                @Inject(JQ_TOKEN) private jQuery:any ) { }

    ngOnInit() {
        this.jQuery("#btnTest").click(function () {
            window.confirm("Are you sure?");
        })

        this.nestedService.getName().subscribe(
            data => this.title = data,
            error => console.log(error)
        )
    }

    setCals() {
        this.test.emit("test");
    }
}


var x = 1;
console.log(x);
