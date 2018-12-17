import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { IUser } from '../../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  @Input() users: Array<IUser>;
  @Input() selectedRole: string;
  @Input() selectedSort: string;

  constructor() { }

  ngOnInit() {

  }

}
