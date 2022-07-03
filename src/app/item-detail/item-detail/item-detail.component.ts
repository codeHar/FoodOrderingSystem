import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodData } from 'src/app/shared/interfaces/FoodData';
import { CartService } from 'src/app/shared/services/cart.service';
import { FoodDataService } from 'src/app/shared/services/food-data.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  id:number=0
  currentFood:FoodData

  constructor(
    private route:ActivatedRoute,
    private foodDataService:FoodDataService,
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.currentFood=this.foodDataService.getFoodDetail(this.id)
  }

  addToCart(){
    this.cartService.getFoodItem().next(this.currentFood)
  }

}
