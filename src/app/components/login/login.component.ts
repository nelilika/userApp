import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isPwdHided = true;
  authSubscription: Subscription;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authSubscription = this.authService.login(this.loginForm.value)
      .subscribe(() => {
        this.router.navigate(['/']);
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
