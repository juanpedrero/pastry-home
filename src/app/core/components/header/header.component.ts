import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  private isDropdownLoginOpen: boolean;
  // private isSignupOpen: boolean;

  // private isShown = false;

  constructor() {
    // this.isSignupOpen = false
    // this.isLoginOpen = false
    this.isDropdownLoginOpen = false
   }

  ngOnInit() {
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

//   toShow(): void{
//     this.isShown = !(this.isShown);
//   }
}
