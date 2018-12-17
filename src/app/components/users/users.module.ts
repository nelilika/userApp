import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatSelectModule,
  MatRadioModule,
  MatExpansionModule,
  MatIconModule,
} from '@angular/material';

import { AppRoutingModule } from '../../app-routing.module';

import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserItemComponent } from './users-list/user-item/user-item.component';

import { UserService } from '../../services/user.service';

import { SortUsersPipe } from '../../pipes/sort-users.pipe';
import { FilterUsersPipe } from '../../pipes/filter-users.pipe';

@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailsComponent,
    UserItemComponent,
    UsersComponent,
    FilterUsersPipe,
    SortUsersPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatIconModule,
  ],
  providers: [UserService],
})
export class UsersModule { }
