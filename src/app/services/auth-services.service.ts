import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  constructor(
    private api:HttpClient,
  ){}
  apiUrl:string = 'http://localhost:3000';
  signup(data:any): Observable<object> {
    return this.api.post(this.apiUrl+'/register',data);
  }
  signin(data:any): Observable<object> {
    return this.api.post<any>(this.apiUrl+'/login',data);
  }
  create(data:any): Observable<object> {
    return this.api.post(this.apiUrl+'/product', data);
  }
  getOne(id:any): Observable<object> {
    return this.api.get(`${this.apiUrl+'/product'}/${id}`);
  }
  update(id:any, data:any): Observable<object> {
    return this.api.put(`${this.apiUrl+'/product'}/${id}`, data);
  }
  getAll(): Observable<object> {
    return this.api.get(this.apiUrl+'/product');
  }
  delete(id:any): Observable<object> {
    return this.api.delete(`${this.apiUrl+'/product'}/${id}`);
  }
}
