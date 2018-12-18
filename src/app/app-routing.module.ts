import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

import { HomeComponent } from './components/home/home.component';
import { MainComponent } from "./components/home/main/main.component";
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', canActivate: [AuthGuard], component: HomeComponent, children: [
    { path: 'dashboard', component: MainComponent },
    { path: 'users', canActivate: [AuthGuard], component: UsersComponent, children: [
      { path: ':id', component: UserDetailsComponent },
    ]},
  ]},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
