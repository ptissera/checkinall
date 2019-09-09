import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveModule } from './reserve/reserve.module';
import { UiCoreModule } from '../ui-core/ui-core.module';
import { UserModule } from './user/user.module';
import { SigninModule } from './signin/signin.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CommonModule,
    UiCoreModule,
    UserModule,
    SigninModule,
    ReserveModule,
    HomeModule
  ]
})
export class PagesModule { }
