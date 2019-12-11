import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PastryListComponent } from './pastries/pastry-list/pastry-list.component';
import { PastryCardComponent } from './pastries/pastry-card/pastry-card.component';
import { PastryDetailComponent } from './pastries/pastry-detail/pastry-detail.component';
import { LoginComponent } from './modals/components/login/login.component';
import { CoreModule } from './core/core.module';
import { BakerComponent } from './profiles/baker/baker.component';
import { CustomerComponent } from './profiles/customer/customer.component';
// import { ModalsModule } from './modals/modals.module'; Lo borro y dejo solo los componentes.
import { ProfilesModule } from './profiles/profiles.module';
import { SigninComponent } from './modals/components/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    PastryListComponent,
    PastryCardComponent,
    PastryDetailComponent,
    BakerComponent,
    CustomerComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
   // ModalsModule,
    ProfilesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
