import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      { enableTracing: true }),
    HttpClientModule,
    ReactiveFormsModule     
  ]
})
export class SigninModule { }