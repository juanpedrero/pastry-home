import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Pastry } from 'src/app/types/pastry';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  protected cartList: number[];
  protected productList: Pastry[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartList = this.cartService.getCartProducts();
    this.createProductList();
  }

  createProductList() {
    this.productList = this.cartService.getPastriesByIdList(this.cartList);
  }

  removeProduct(id) {
    this.cartList.splice(id, 1);
    this.createProductList();
    console.log(this.cartList);
  }
}
