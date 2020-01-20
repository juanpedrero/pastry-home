import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-login-user',
  templateUrl: './dropdown-login-user.component.html',
  styleUrls: ['./dropdown-login-user.component.scss']
})
export class DropdownLoginUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('user');
  }

}
