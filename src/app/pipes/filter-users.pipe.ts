import { Pipe, PipeTransform } from '@angular/core';

import { IUser } from '../models/user.model';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: Array<IUser>, selectedRole?: string): Array<IUser> {
    return selectedRole && selectedRole !== 'all' ?
      users.filter(user => selectedRole === user.role) : users;
  }

}
