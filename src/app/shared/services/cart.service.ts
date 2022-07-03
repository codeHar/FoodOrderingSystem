import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FoodData } from '../interfaces/FoodData';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  foodItems:FoodData[]=[]
  foodItem=new Subject<FoodData>()

  constructor() {
    if(localStorage.getItem("cartItems")){
      this.foodItems=JSON.parse(localStorage.getItem("cartItems"))
    }
    this.foodItem.subscribe(
      (data:FoodData)=>{
        console.log("Food data",data)
        let productExists=this.foodItems.some(item=>item.id==data.id)
        if(productExists){
          for(let i=0;i<this.foodItems.length;i++){
            if(this.foodItems[i].id==data.id){
              this.foodItems[i].quantity+=1
              console.log(`${this.foodItems[i].name} : ${this.foodItems[i].quantity}`)
              break
            }
          }
        }
        else{
          this.foodItems.push({...data,quantity:1})
        }
        this.saveToLocalStorage()
        console.log("foodItems",this.foodItems.length)
      }
    )
   }

  getFoodItem():Subject<FoodData>{
    return this.foodItem
  }

  getFoodsInCart(){
    return this.foodItems
  }

  getTotalFoodCount(){
    let totalCount=0
    if(this.foodItems.length>0){
      this.foodItems.forEach(item=>{
        totalCount+=item.quantity
      })
    }
    return totalCount
  }

  getTotalPrice(){
    let totalPrice=0
    if(this.foodItems.length>0){
      this.foodItems.forEach(item=>{
        totalPrice+=(item.quantity*item.price)
      })
    }
    return totalPrice
  }

  saveToLocalStorage(){
    const items=JSON.stringify(this.foodItems)
    if(!localStorage.getItem("cartItems")){
      localStorage.setItem("cartItems",items)
    }
    localStorage.setItem("cartItems",items)
  }
}
