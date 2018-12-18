import { NgModule } from '@angular/core';

import {
  MatTabsModule,
  MatToolbarModule,
  MatCardModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../app-routing.module';

import { HeaderComponent } from "../header/header.component";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers: [],
})
export class HomeModule { }
