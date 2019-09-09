import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CRUDService } from 'src/app/core/services/crud.service';
import { Reserve } from '../models/reserve.model';

@Injectable({
  providedIn: 'root',
})
export class ReserveService extends CRUDService<Reserve> {

  constructor(http: HttpClient) {
    super('reserves', http);
  }
}