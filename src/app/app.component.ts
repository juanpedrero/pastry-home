import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from './services/cart.service';
import { Pastry } from './types/pastry';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pastryhome';

  // public shoppingCartItems$: Observable<Pastry[]>;

  // constructor(public location: Location, private cartService: CartService) {

  //   this.shoppingCartItems$ = this
  //     .cartService
  //     .getItems();

  //   this.shoppingCartItems$.subscribe(data => data);
  // }


}
