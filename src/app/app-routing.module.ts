import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/components/error/error.component';
import { HomeComponent } from './home/home.component';
// import { PastryCardComponent } from './pastries/pastry-card/pastry-card.component';
import { BakerComponent } from './profiles/baker/baker.component';
import { CustomerComponent } from './profiles/customer/customer.component';
import { PastryDetailComponent } from './pastries/pastry-detail/pastry-detail.component';
import { PastryListComponent } from './pastries/pastry-list/pastry-list.component';
import { CartComponent } from './shared/cart/cart.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { LoginComponent } from './core/components/login/login.component';
import { PastryFilteredComponent } from './pastries/pastry-filtered/pastry-filtered.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product/result', component: PastryFilteredComponent},
  {path: 'category/:category', component: PastryListComponent},
  {path: 'product/:id', component: PastryDetailComponent},
  {path: 'baker/:id', component: BakerComponent},
  {path: 'customer/:id', component: CustomerComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
