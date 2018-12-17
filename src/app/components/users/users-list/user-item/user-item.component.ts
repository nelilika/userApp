import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { IUser } from '../../../../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent implements OnInit {
  @Input() user: IUser;

  constructor() { }

  ngOnInit() {

  }

}
