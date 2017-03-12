import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class FoodService {
    foodList = new Subject<string>();
    foodList$ = this.foodList.asObservable();
    constructor() { }
}