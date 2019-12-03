import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ErrorComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
