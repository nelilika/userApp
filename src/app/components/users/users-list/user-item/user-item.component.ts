import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { IUser } from '../../../../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: IUser;
  @Output() selectedUser = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit() {

  }

  onSelected() {
    this.selectedUser.emit(this.user);
  }

}
