import { Pipe, PipeTransform } from '@angular/core';

import { IUser } from '../models/user.model';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  transform(users: Array<IUser>, selectedSort?: string): Array<IUser> {
    users.sort((userPrev: IUser, user: IUser) => {
      if (selectedSort === 'az') {
        if (userPrev.firstName < user.firstName) {
          return -1;
        } else if (userPrev.firstName > user.firstName) {
          return 1;
        } else {
          return 0;
        }
      } else if (selectedSort === 'za') {
        if (userPrev.firstName > user.firstName) {
          return -1;
        } else if (userPrev.firstName < user.firstName) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return users;
      }
    });
    return users;
  }

}
