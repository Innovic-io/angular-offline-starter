import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SystemService } from '../../services/system.service';
import { RegisterModel } from '../../models/register.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
  registerEmployee = new RegisterModel();

  constructor(private employeeService: EmployeeService,
              private route: Router,
              private systemService: SystemService) {
  }

  async onSubmit(form: NgForm, email, password) {
    if (form.valid) {
      const isUserLoggedIn = await this.employeeService.signIn(email, password);

      if (isUserLoggedIn) {
        this.route.navigateByUrl('/dashboard');
        localStorage.setItem('user', isUserLoggedIn.guid);
      } else {
        this.systemService.createDangerAlertMessage('Email or password is wrong!');
        form.reset();
      }
    }
  }
}
