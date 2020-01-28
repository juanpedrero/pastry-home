import { Injectable } from '@angular/core';
import { Pastry } from '../types/pastry';
import { PastryService } from './pastry.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  private itemsInCartSubject$: BehaviorSubject<Pastry[]> = new BehaviorSubject([]);
  private itemsInCart: Pastry[] = [];


  constructor(private pastryService: PastryService) {
    this.itemsInCartSubject$.subscribe(data => this.itemsInCart = data);
  }

  public addToCart(item: Pastry) {
    const currentItems = [...this.itemsInCart];
    if(currentItems.length === 0){
      this.itemsInCartSubject$.next([...this.itemsInCart, item]);
    }else{
          currentItems.forEach((pastry) => {
      if(pastry.id != item.id){
        this.itemsInCartSubject$.next([...this.itemsInCart, item]);
    }else{
      this.sumProductToCart(item);
    }})
    }
  }

  public removeFromCart(item: Pastry) {
    const currentItems = [...this.itemsInCart];
    const itemsNotRemoved = currentItems.filter(pastry => pastry.id !== item.id);
    this.itemsInCartSubject$.next(itemsNotRemoved);
  }

  public sumProductToCart (item: Pastry) {
    const currentItems = [...this.itemsInCart];
    currentItems.find(pastry => pastry.id == item.id).quantity = item.quantity + 1;
  }

    // this.itemsInCartSubject.next([...this.itemsInCart, item]);
    // let tempItem =  currentItems.find(pastry => pastry.id === item.id);
    // tempItem.quantity = tempItem.quantity+1
    // this.itemsInCartSubject.next(tempItem);

  public restProductToCart (item: Pastry) {
    const currentItems = [...this.itemsInCart];
  //  const itemById = currentItems.filter(pastry => pastry.id === item.id);
  currentItems.forEach((pastry) => {
         if (currentItems.length >= 0) {
          currentItems.find(pastry => pastry.id == item.id).quantity = item.quantity - 1;
    } else {
      this.removeFromCart(item);
    }
    })
  }

  public getItems(): Observable<Pastry[]> {
    return this.itemsInCartSubject$;
  }

  public getCartLength(){
    let numItems;
     this.itemsInCartSubject$.subscribe(data => numItems = data.length);
     return numItems;
  }

  public getItemById(item: Pastry){
    const currentItems = [...this.itemsInCart];
    currentItems.find(pastry => pastry.id == item.id);
  }

  // getCartProducts(): number[] {
  //   return [3, 2, 5]
  // }

  // getPastriesByIdList(cartList: number[]): Pastry[] {
  //   return cartList.map((id) => this.pastryService.getProduct(id));
  // }

}
