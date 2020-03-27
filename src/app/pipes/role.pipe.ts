import { Pipe, PipeTransform } from '@angular/core';

import { Roles } from '../models/system.models';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(role: string): string {
    switch (role) {
      case Roles.doctor:
        return 'Dr.';
      case Roles.nurse:
        return 'Nr.';
    }
  }
}
