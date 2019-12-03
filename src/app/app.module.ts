import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PastryListComponent } from './pastry-list/pastry-list.component';
import { PastryCardComponent } from './pastry-card/pastry-card.component';
import { PastryDetailComponent } from './pastry-detail/pastry-detail.component';
import { LoginComponent } from './login/components/login/login.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PastryListComponent,
    PastryCardComponent,
    PastryDetailComponent,    
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
