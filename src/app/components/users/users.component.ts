import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IUser } from '../../models/user.model';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  selectedRole = 'all';
  selectedSort = '';
  roles: Array<string> = [];
  users: Array<IUser> = [];
  usersSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usersSubscription = this.userService.getUsers()
      .subscribe((users: Array<IUser>) => {
        this.users = users;
        this.getUsersRole();
      });
  }

  getUsersRole() {
    const allRoles = this.users.map((user: IUser) => user.role);
    this.roles = [...new Set(allRoles)];
    this.roles.unshift('all');
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}
