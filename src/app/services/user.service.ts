import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../models/user.model';

@Injectable()
export class UserService {
  users: Array<IUser> = [];
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.API_URL}/users`);
  }

  getUser(id): Observable<any> {
    return this.http.get(`${this.API_URL}/users/${id}`);
  }
}
