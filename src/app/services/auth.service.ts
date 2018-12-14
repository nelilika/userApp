import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "../../environments/environment";

import { ILogin } from '../models/login.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    return localStorage.getItem('token');
  }

  login(loginParams: ILogin): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/login`)
      .pipe(map(this.setSession));
  }

  private setSession(res: any): string {
    localStorage.setItem('token', res.token);
    return res.token;
  }
}
