import { Component, OnInit } from '@angular/core';
import { FoodData } from 'src/app/shared/interfaces/FoodData';
import { FoodDataService } from 'src/app/shared/services/food-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  foodDatas:FoodData[]

  constructor(private foodDataService:FoodDataService) {
    this.foodDatas=this.foodDataService.getFoodDatas()
   }

  ngOnInit(): void {
    
  }

}
