import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Output() selectedUser = new EventEmitter();

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => this.users = users);
  }

  onSelectedUser(event) {
    this.selectedUser.emit(event);
  }

}
