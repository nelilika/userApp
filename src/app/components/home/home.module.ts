import { NgModule } from '@angular/core';

import {
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../app-routing.module';

import { HeaderComponent } from "../header/header.component";
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [],
})
export class HomeModule { }
