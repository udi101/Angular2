import { Component, OnInit,OnDestroy } from '@angular/core';
import { CommonService } from './common.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'grandfather',
    templateUrl: 'grandfather.component.html',
    providers: [CommonService]
})
export class GrandFatherComponent implements OnInit,OnDestroy {
    title:string;
    subscription: Subscription;
    constructor(private commonService: CommonService) { }

    ngOnInit() {
        this.subscription = this.commonService.messageStream$.subscribe(
            data => this.title = data
        )
    }
 
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    setNewMission(mission:string){
        this.commonService.sendMessage(mission);
    }
}