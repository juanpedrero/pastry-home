import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { Pastry } from 'src/app/types/pastry';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  public shoppingCartItems$: Observable<Pastry[]>;
  public shoppingCartItems: Pastry[] = [];

  private isDropdownLoginOpen: boolean;
  // private isSignupOpen: boolean;

  // private isShown = false;

  constructor(private cartService: CartService) {
    // this.isSignupOpen = false
    // this.isLoginOpen = false
    // this.shoppingCartItems$ = this.cartService.getItems();
    // this.shoppingCartItems$.subscribe( data => this.shoppingCartItems = data);


    this.isDropdownLoginOpen = false
   }

  ngOnInit() {
    this.shoppingCartItems$ = this
    .cartService
    .getItems();

 this.shoppingCartItems$.subscribe( data => this.shoppingCartItems = data);
  }

  getTotal(pastries){
    let total = 0;
    pastries.forEach(pastry => {
      total = total + pastry.quantity
    })
    return total;
  }

  // openLogin(): void {

  //   this.isLoginOpen = !this.isLoginOpen;
  //   console.log('hola');
  // }

  // openSignup(): void {
  //   this.isSignupOpen = !this.isSignupOpen;
  // }

  isLogged(): boolean{
    if (localStorage.getItem('user')) {
      return true;
    }
  }

  openDropdownLogin(): void{
    this.isDropdownLoginOpen = !this.isDropdownLoginOpen

  }

  // getLengthCart(){
  //   // console.log(this.cartService.getCartLength());
  //   return this.cartService.getCartLength();
  // }

//   toShow(): void{
//     this.isShown = !(this.isShown);
//   }
}
