import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './modals/components/login/login.component';
import { SigninComponent } from './modals/components/signin/signin.component';


const COMPONENTS = [
  LoginComponent,
  SigninComponent
]



@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
