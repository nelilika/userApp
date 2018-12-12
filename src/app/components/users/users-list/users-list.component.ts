import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { IUser } from '../../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users: Array<IUser>;
  @Input() selectedRole: string;
  @Input() selectedSort: string;
  @Output() selectedUser = new EventEmitter();

  constructor() { }

  onSelectedUser(event) {
    this.selectedUser.emit(event);
  }

  ngOnInit() {

  }

}
