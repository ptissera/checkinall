import { NgModule } from '@angular/core';
import { CRUDService } from './services/crud.service';
import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  providers: [
    CRUDService,
    AuthGuard,
    JwtInterceptor,
    ErrorInterceptor
  ]
})
export class CoreModule { }
