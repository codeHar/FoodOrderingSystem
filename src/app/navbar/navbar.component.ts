import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  totalItemsInCart=0

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.totalItemsInCart=this.cartService.getTotalFoodCount()
    this.cartService.getFoodItem().subscribe(
      data=>{
        this.totalItemsInCart+=1
      }
    )
  }

}
