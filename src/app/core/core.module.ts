import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DropdownLoginUserComponent } from './components/dropdown-login-user/dropdown-login-user.component';
import { DropdownLoginBakerComponent } from './components/dropdown-login-baker/dropdown-login-baker.component';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';





@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DropdownLoginUserComponent,
    DropdownLoginBakerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AngularMultiSelectModule,
  ],
  exports: [
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AngularMultiSelectModule,
    FormsModule
  ]
})
export class CoreModule { }
