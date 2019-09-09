import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { UiCoreModule } from 'src/app/ui-core/ui-core.module';
import { HomeComponent } from './home.component';
import { ReserveFormComponent } from '../reserve/components/reserve-form/reserve-form.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children:[
    {
      path: 'add',
      component: ReserveFormComponent,
      outlet: 'sidepanel',
      canActivate: [AuthGuard]
    },
    {
      path: 'edit/:id',
      component: ReserveFormComponent,
      outlet: 'sidepanel',
      canActivate: [AuthGuard]
    }]
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    UiCoreModule
  ]
})
export class HomeModule { }
