import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          return true;
        }
        this.router.navigate(['/']);
        return false;
      });
  }
}
