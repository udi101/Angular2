import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class FoodService {
    foodList = new Subject<string>();  // this is for getting data with 'next' command
    foodList$ = this.foodList.asObservable();       // this is for sending data to the component 
    constructor() { }
}