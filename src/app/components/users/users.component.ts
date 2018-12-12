import { Component, OnInit } from '@angular/core';

import { IUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  selectedUser: IUser;
  selectedRole = 'all';
  selectedSort = '';
  roles: Array<string> = [];
  users: Array<IUser> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: Array<IUser>) => {
      this.users = users;
      this.getUsersRole();
    });
  }

  getUsersRole() {
    const allRoles = this.users.map((user: IUser) => user.role);
    this.roles = [...new Set(allRoles)];
    this.roles.unshift('all');
  }

  showUserDetails(user: IUser) {
    this.selectedUser = user;
  }

}
