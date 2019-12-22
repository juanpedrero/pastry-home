import { Injectable } from '@angular/core';
import { Pastry } from '../types/pastry';
import { PastryService } from './pastry.service';
import { createHostListener } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private pastryService: PastryService) { }

  getCartProducts(): number[] {
    return [3, 2]
  }

  getPastriesByIdList(cartList: number[]): Pastry[] {
    return cartList.map((id) => this.pastryService.getPastryById(id));
  }
}
