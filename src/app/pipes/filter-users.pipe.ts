import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: any, selectedRole?: any): any {
    return selectedRole && selectedRole !== 'all' ?
      users.filter(user => selectedRole === user.role) : users;
  }

}
