import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';





@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent
  ]
})
export class CoreModule { }
