import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { IUser } from '../../../models/user.model';

import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: IUser;
  paramsSubscription: Subscription;
  userSubscription: Subscription;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe((params: Params) => {
        this.userSubscription = this.userService.getUser(params['id'])
          .subscribe((user: IUser) => {
            this.user = user;
          })
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
