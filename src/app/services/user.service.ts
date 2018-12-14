import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../models/user.model';

import { environment } from "../../environments/environment";

@Injectable()
export class UserService {
  users: Array<IUser> = [];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/users`);
  }

  getUser(id): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/users/${id}`);
  }
}
