import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { EmployeeService } from './services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!await this.employeeService.isUserAlreadyLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/dashboard');
      return false;
    }
  }
}

