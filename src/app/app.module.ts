import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from "./components/home/home.module";
import { UsersModule } from './components/users/users.module';
import { LoginModule } from './components/login/login.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HomeModule,
    LoginModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
