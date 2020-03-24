import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';
import { SystemService } from '../../services/system.service';
import { RegisterModel } from '../../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {
  registerEmployee = new RegisterModel();

  constructor(private employeeService: EmployeeService, private systemService: SystemService, private route: Router) {
  }

  async onSubmit(form: NgForm) {
    if (form.valid) {
      const isUserCreated = await this.employeeService.register(this.registerEmployee);

      if (isUserCreated) {
        this.systemService.createAlertMessage('Registration was successful!');
        this.route.navigateByUrl('/login');
      } else {
        this.systemService.createDangerAlertMessage('User already exists!');
        form.reset();
      }
    }
  }


}
