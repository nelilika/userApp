import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  isAuthenticated() {
    return localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get(`${this.API_URL}/login`)
      .pipe(map(this.setSession));
  }

  private setSession(token: string) {
    localStorage.setItem('token', token);
  }
}
