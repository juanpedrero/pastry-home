import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  private isLogged = true;
  private isShown = false;

  ngOnInit() {
  }

  toLog(): boolean{
    if (localStorage.getItem('user')) {
      return true;
    }
  }

  toShow(): void{
    this.isShown = !(this.isShown);
  }
}
