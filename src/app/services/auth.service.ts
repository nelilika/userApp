import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    })
  }
}
