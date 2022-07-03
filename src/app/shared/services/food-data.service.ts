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
    let foodDetail
    this.foodData.forEach(food=>{
      if(food.id==id){
        foodDetail=food
        return
      }
    })
    return foodDetail
   }

   getFoodDatas():FoodData[]{
    return this.foodData
   }

  
}

let foodDatas:FoodData[]=[
  {
    id:1,
    img:"../../../assets/foodImages/food1.jpeg",
    price:120,
    name:"MoMo",
    location:"Samakhusi,Kathmandu",
    rating:"7",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id:2,
    img:"../../../assets/foodImages/food2.jpg",
    price:520,
    name:"Tandoori Chicken",
    location:"Baniyatar,Kathmandu",
    rating:"7",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id:3,
    img:"../../../assets/foodImages/food3.jpg",
    price:420,
    name:"Pizza",
    location:"Gongabu,Kathmandu",
    rating:"8",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id:4,
    img:"../../../assets/foodImages/food4.jpg",
    price:220,
    name:"Jhol MoMo",
    location:"Patan,Lalitpur",
    rating:"6",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id:5,
    img:"../../../assets/foodImages/food5.jpeg",
    price:220,
    name:"Ham Burger",
    location:"Patan,Lalitpur",
    rating:"7",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id:6,
    img:"../../../assets/foodImages/food6.jpg",
    price:220,
    name:"Veg Protien Diet",
    location:"Lorem,Lalitpur",
    rating:"9",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id:7,
    img:"../../../assets/foodImages/food8.jpg",
    price:220,
    name:"Americano Pizza",
    location:"Patan,Lalitpur",
    rating:"8",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id:8,
    img:"../../../assets/foodImages/food9.jpg",
    price:220,
    name:"Rice with special curry",
    location:"Patan,Lalitpur",
    rating:"5",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  
]
