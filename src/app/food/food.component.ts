import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FoodService } from './food.service';

@Component({
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [FoodService]
})
export class FoodComponent implements OnInit {
  foodList: string = null;
  subscription: Subscription;
  constructor(private foodService:FoodService) { }

  ngOnInit() { 
    // רישום לפונקציה של השירות של אוכל
    this.subscription = this.foodService.foodList$.subscribe(
      data =>{ setTimeout(function(){
        console.log("This is " + data);
      },1000); 
        })
  }

  sendFood(_food:string){
    this.foodService.foodList.next(_food);
  }
}
