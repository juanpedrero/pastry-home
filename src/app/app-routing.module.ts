import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { ErrorComponent } from './core/components/error/error.component';
import { HomeComponent } from './home/home.component';
import { PastryCardComponent } from './pastry-card/pastry-card.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product/:id', component: PastryCardComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
