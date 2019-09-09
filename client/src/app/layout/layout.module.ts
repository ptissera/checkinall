import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  HeaderComponent, FooterComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class LayoutModule { }
