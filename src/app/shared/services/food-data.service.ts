import { Injectable } from '@angular/core';
import { FoodData } from '../interfaces/FoodData';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {
  foodData:FoodData[]
  constructor() {
    this.foodData=foodDatas
   }

   getFoodDetail(id:number):FoodData{
    return this.foodData[id]
   }

   getFoodDatas():FoodData[]{
    return this.foodData
   }

  
}

let foodDatas:FoodData[]=[
  {
    img:"../../../assets/foodImages/food1.jpeg",
    price:120,
    name:"MoMo",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    img:"../../../assets/foodImages/food2.jpg",
    price:520,
    name:"Tandoori Chicken",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    img:"../../../assets/foodImages/food3.jpg",
    price:420,
    name:"Pizza",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    img:"../../../assets/foodImages/food4.jpg",
    price:220,
    name:"Jhol MoMo",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
]
