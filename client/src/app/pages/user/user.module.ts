import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { UiCoreModule } from 'src/app/ui-core/ui-core.module';

const routes: Routes = [
  {
    path: 'user',
    component: UserListComponent,
    canActivate: [AuthGuard],
    children:[
    {
      path: 'add',
      component: UserFormComponent,
      outlet: 'sidepanel',
      canActivate: [AuthGuard]
    },
    {
      path: 'edit/:id',
      component: UserFormComponent,
      outlet: 'sidepanel',
      canActivate: [AuthGuard]
    }]
  }
];

@NgModule({
  declarations: [
    UserFormComponent, 
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    UiCoreModule
  ]
})
export class UserModule { }
