import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authSubscription = this.authService.login('email', 'pwd')
      .subscribe(() => {
        this.router.navigate(['/']);
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
