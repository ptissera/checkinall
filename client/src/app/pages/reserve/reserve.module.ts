import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveFormComponent } from './components/reserve-form/reserve-form.component';
import { ReserveListComponent } from './components/reserve-list/reserve-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { UiCoreModule } from 'src/app/ui-core/ui-core.module';

const routes: Routes = [
  {
    path: 'reserve',
    component: ReserveListComponent,
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
  declarations: [
    ReserveFormComponent, 
    ReserveListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    UiCoreModule
  ],
  exports: [
    ReserveFormComponent
  ]
})
export class ReserveModule { }
