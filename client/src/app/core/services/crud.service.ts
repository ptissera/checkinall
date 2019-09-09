import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URI } from '../constants/restApi.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CRUDService<T> {
  
  constructor(private path: String, private http: HttpClient) { }

  getAll() {
    return this.http.get(`${API_URI}/${this.path}`);
  }

  getOne(id:number): Observable<any> {
    return this.http.get(`${API_URI}/${this.path}/${id}`);
  }

  delete(id:number) {
    return this.http.delete(`${API_URI}/${this.path}/${id}`);
  }

  save(element: T) {
    return this.http.post(`${API_URI}/${this.path}/`, element);
  }

  update(id:number, element: T) {
    return this.http.put(`${API_URI}/${this.path}/${id}`, element);
  }

  post(element: T | any) {
    return this.http.post(`${API_URI}/${this.path}/`, element);
  }
}
