import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class NestedService {
    constructor() { }

    getName():any{
        let emiter = new EventEmitter(true);
        // emiter.emit(UserName);
        setTimeout(()=>emiter.emit(UserName), 2000);
        return(emiter);
    }
}

const UserName:string = "udi mazor";