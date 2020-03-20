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

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.employeeService.getLoggedEmployee()) {
      return true;
    } else {
      console.log(this.router.navigateByUrl('/dashboard'));
      return false;
    }
  }
}

