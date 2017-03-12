import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';


@Injectable()
export class CommonService {
    private message = new Subject<string>();

    messageStream$ = this.message.asObservable();
    constructor() { }

    // service mission command
    sendMessage(mission:string){
        this.message.next(mission);
    }
}