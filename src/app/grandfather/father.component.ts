import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'father',
    templateUrl: 'father.component.html'
})
export class FatherComponent implements OnInit {
    title: string;
    subscription: Subscription;
    constructor(private commonservice: CommonService) { }

    ngOnInit() {
        this.subscription = this.commonservice.messageStream$.subscribe(
            data => {
                this.title = data;
            }
        )
    }

    setMission(message: string) {
        this.commonservice.sendMessage(message);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}