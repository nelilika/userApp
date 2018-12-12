import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const API_URL = 'http://localhost:3000';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${API_URL}/users`);
  }
}
