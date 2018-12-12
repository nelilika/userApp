import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { User } from '../../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users: User[];
  @Output() selectedUser = new EventEmitter();

  constructor() { }

  onSelectedUser(event) {
    this.selectedUser.emit(event);
  }

  ngOnInit() {

  }

}
