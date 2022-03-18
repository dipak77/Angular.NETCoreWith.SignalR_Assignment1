import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

const baseUrl = `/api/user`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<User[]>(`${baseUrl}/getAll`);
  }

  getById(id: string) {
    return this.http.get<User>(`${baseUrl}/{id}`);
  }

  create(params: any) {
    console.log(baseUrl);
    console.log(JSON.stringify(params));
    return this.http.post(`${baseUrl}/Post`, params);
  }

  update(id: string, params: any) {
    return this.http.put(`${baseUrl}/Update/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/Delete/${id}`);
  }
  getUserData() {
    return this.http.get(`${baseUrl}/GetUserData`);
  }

  getAdminData() {
    return this.http.get(`${ baseUrl }/GetAdminData`);
  }
}
