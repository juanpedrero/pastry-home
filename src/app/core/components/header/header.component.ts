import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  private isLoginOpen: boolean;
  private isSignupOpen: boolean;

  // private isShown = false;

  constructor() {
    this.isSignupOpen = false
    this.isLoginOpen = false
   }

  ngOnInit() {
  }

  openLogin(): void {

    this.isLoginOpen = !this.isLoginOpen;
    console.log('hola');
  }

  openSignup(): void {
    this.isSignupOpen = !this.isSignupOpen;
  }

  isLogged(): boolean{
    if (localStorage.getItem('user')) {
      return true;
    }
  }

//   toShow(): void{
//     this.isShown = !(this.isShown);
//   }
}
