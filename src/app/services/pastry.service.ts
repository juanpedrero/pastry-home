import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pastry } from '../types/pastry';

@Injectable({
  providedIn: 'root'
})
export class PastryService {

  public selectedPastry$ = new BehaviorSubject<Pastry>({
    img: 'string',
    namePastry: 'string',
    nameAuthor: 'string',
    description: 'string',
    rating: 'string',
    price: 7,
  })

  public selected

  constructor() { }
}
