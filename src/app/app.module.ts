import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PastryListComponent } from './pastries/pastry-list/pastry-list.component';
import { PastryCardComponent } from './pastry-card/pastry-card.component';
import { PastryDetailComponent } from './pastries/pastry-detail/pastry-detail.component';
import { CoreModule } from './core/core.module';
import { BakerComponent } from './profiles/baker/baker.component';
import { CustomerComponent } from './profiles/customer/customer.component';
// import { ModalsModule } from './modals/modals.module'; Lo borro y dejo solo los componentes.
import { ProfilesModule } from './profiles/profiles.module';
import { NavbarHomeComponent } from './navbars/components/navbar-home/navbar-home.component';
import { NavbarSideComponent } from './navbars/components/navbar-side/navbar-side.component';
// import { CartComponent } from './shared/cart/cart.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { StarRatingModule } from 'angular-star-rating';
import { SharedModule } from './shared/shared.module';
import { PastryFilteredComponent } from './pastries/pastry-filtered/pastry-filtered.component';
//import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PastryListComponent,
    PastryCardComponent,
    PastryDetailComponent,
    BakerComponent,
    CustomerComponent,
    NavbarHomeComponent,
    NavbarSideComponent,
    // CartComponent,
    CategoryListComponent,
    PastryFilteredComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    //AngularMultiSelectModule,
   // ModalsModule,
    ProfilesModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
