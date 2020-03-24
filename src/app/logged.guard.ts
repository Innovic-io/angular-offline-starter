import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { DatabaseService } from './services/database.service';
import { EmployeeModel } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(private employeeService: EmployeeService, private router: Router, private db: DatabaseService) {
  }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.employeeService.getLoggedEmployee()) {

      const loggedInUser = localStorage.getItem('user');

      if (loggedInUser) {
        const user = await this.db.getSingle<EmployeeModel>('employees', loggedInUser);
        const isLoggedIn = await this.employeeService.signIn(user.contact.email, user.password);

        if (isLoggedIn) {
          // console.log(state.url);
          this.router.navigateByUrl('/dashboard');
        }
      }

      return true;
    } else {
      this.router.navigateByUrl('/dashboard');
      return false;
    }
  }
}

