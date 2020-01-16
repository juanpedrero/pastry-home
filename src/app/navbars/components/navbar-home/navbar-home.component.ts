import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent implements OnInit {

  private isDropdownSearchOpen: boolean;


  constructor() {
    this.isDropdownSearchOpen = false

   }

  ngOnInit() {
  }

  openDropdownSearch(): void {
    this.isDropdownSearchOpen = !this.isDropdownSearchOpen;
  }

  closeDropdownSearch(): void {
    this.isDropdownSearchOpen = false;
  }

}
