import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pastry } from '../types/pastry';

@Injectable({
  providedIn: 'root'
})
export class PastryService {

  public selectedPastry$ = new BehaviorSubject<Pastry>({

  })

  public selected

  constructor() { }
}
