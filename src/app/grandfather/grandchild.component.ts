import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'grandchild',
    templateUrl: 'grandchild.component.html'
})
export class GrandchildComponent implements OnInit {
    title: string;
    subscription: Subscription;
    constructor(private commonService: CommonService) { }

    ngOnInit() {
        this.subscription = this.commonService.messageStream$.subscribe(
            data => this.title = data
        )
    }

    setMessage(message:string){
        this.commonService.sendMessage(message);
    }
}