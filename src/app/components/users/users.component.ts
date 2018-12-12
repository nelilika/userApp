import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnChanges {
  selectedUser: User;
  selectedRole: string;
  roles: Array<string> = [];
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      this.getUsersRole();
    });
  }

  ngOnChanges() {
  }

  getUsersRole() {
    this.roles = this.users.map(user => user.role);
  }

  showUserDetails(user) {
    this.selectedUser = user;
  }

}
