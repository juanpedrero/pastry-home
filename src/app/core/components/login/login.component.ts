import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/types/login'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private login: Login

  constructor(
    private router: Router
  ) {
    this.login = new Login ("", "")
  }

  ngOnInit() {
  }

  submit(email, password): boolean {
    if (email.valid && password.valid) {
      localStorage.setItem("user", "token");
      this.router.navigate(["/"]);
    } return true
  }

an
}
