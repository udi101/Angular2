import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class NestedService {
    counter:number = 0;
    constructor() { }

    getName():EventEmitter<number>{
        let emiter = new EventEmitter(true);
        // emiter.emit(UserName);
        setInterval(()=>{
            emiter.emit(this.counter);
            this.counter += 1;
        },1000)
        return(emiter);
    }
}

const UserName:string = "udi mazor";