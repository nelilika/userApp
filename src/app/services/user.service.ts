import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { IUser } from '../models/user.model';

@Injectable()
export class UserService {
  users: Array<IUser> = [];
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.API_URL}/users`)
      .pipe(map(this.extractData));
  }

  private extractData(res: Array<IUser>) {
    this.users = res;
    return this.users || { };
  }
}
