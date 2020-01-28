import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CartComponent } from './cart/cart.component';
registerLocaleData(localeEs);
import localeEs from '@angular/common/locales/es';

const COMPONENTS = [
  CartComponent,
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
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ]
})
export class SharedModule {
}
