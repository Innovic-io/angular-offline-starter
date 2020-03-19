import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterModel } from '../../models/register.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { SystemService } from '../../services/system.service';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
  registerEmployee = new RegisterModel();

  constructor(private employeeService: EmployeeService,
              private route: Router,
              private systemService: SystemService,
              private authService: AuthService,
              private authGuard: AuthGuard) {
  }

  onSubmit(form: NgForm, email, password) {
    if (form.valid) {
      const isUserLoggedIn = this.employeeService.signIn(email, password);

      if (isUserLoggedIn) {
        this.route.navigateByUrl('/dashboard');
        this.authService.isLoggedIn = true;
        this.authGuard.checkLogin('/dashboard');
      } else {
        this.systemService.createDangerAlertMessage('Email or password is wrong!');
        form.reset();
      }
    }
  }

}
