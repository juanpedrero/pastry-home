import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Pastry } from 'src/app/types/pastry';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent implements OnInit, OnDestroy {

  private isDropdownSearchOpen: boolean;
  private pastriesFiltered: any;
  private pastries: Pastry[]
  private pastry$: Observable<any>;
  private pastriesObserver: Subscription;
  private typeOf: any;
  private allergy: any;
  private ocassion: any;


  constructor(private cartservice: CartService, private route: ActivatedRoute, ) {
    this.isDropdownSearchOpen = false
  }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.typeOf = params.get('typeOf');
      this.allergy = params.get('allergy');
      this.ocassion = params.get('ocassion');
      this.pastriesFiltered = [];

      this.pastriesObserver = this.cartservice.getItems().subscribe((data) => {
        this.pastries = data;
        for (let i = 0; i < this.pastries.length; i++) {
          let matchTypeOf = false;
          let matchAllergies = false;
          for (let j = 0; j < this.pastries[i].typeOf.length; j++) {
            if (this.pastries[i].typeOf[j] === this.typeOf) {
              matchTypeOf = true;
            }
          }
          for (let z = 0; z < this.pastries[i].allergy.length; z++) {
            if (this.pastries[i].allergy[z] === this.allergy) {
              matchAllergies = true;
            }
          }
          if (matchTypeOf && matchAllergies && this.pastries[i].ocassion === this.ocassion) {
            this.pastriesFiltered.push(this.pastries[i]);
          }
        }
      });
      console.log(params.get('typeOf') + params.get('allergy') + params.get('ocassion'))

    });

  }

  ngOnDestroy() {
    this.pastriesObserver.unsubscribe()
  }

  openDropdownSearch(): void {
    this.isDropdownSearchOpen = !this.isDropdownSearchOpen;
  }

  closeDropdownSearch(): void {
    this.isDropdownSearchOpen = false;
  }



}
