import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { SigninComponent } from './core/components/signin/signin.component';
import { ErrorComponent } from './core/components/error/error.component';
import { HomeComponent } from './home/home.component';
// import { PastryCardComponent } from './pastries/pastry-card/pastry-card.component';
import { BakerComponent } from './profiles/baker/baker.component';
import { CustomerComponent } from './profiles/customer/customer.component';
import { PastryDetailComponent } from './pastries/pastry-detail/pastry-detail.component';
import { PastryListComponent } from './pastries/pastry-list/pastry-list.component';
import { CartComponent } from './shared/cart/cart.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'product/result', component: PastryListComponent},
  {path: 'product/result/filter', component: PastryListComponent},
  {path: 'product/:id', component: PastryDetailComponent},
  {path: 'baker', component: BakerComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
