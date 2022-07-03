import { Component, OnInit } from '@angular/core';
import { FoodData } from 'src/app/shared/interfaces/FoodData';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems:FoodData[]=[]
  totalPrice:string="0"

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItems=this.cartService.getFoodsInCart()
    this.totalPrice=this.cartService.getTotalPrice().toString()
  }



}
