import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Output() selectedUser = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onSelected() {
    this.selectedUser.emit(this.user);
  }

}
