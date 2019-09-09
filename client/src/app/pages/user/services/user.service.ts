import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CRUDService } from 'src/app/core/services/crud.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends CRUDService<User> {

  constructor(http: HttpClient) {
    super('users', http);
  }
}