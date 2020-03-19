import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { SystemService } from '../../services/system.service';
import { RegisterModel } from '../../models/register.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {
  registerEmployee = new RegisterModel();

  onSubmit(form: NgForm) {
    if (form.valid) {
      const isExistingUser = this.employeeService.register(this.registerEmployee);
      if (isExistingUser) {
        this.systemService.createAlertMessage('Registration was successful!');
        this.route.navigateByUrl('/login');
      } else {
        this.systemService.createAlertMessage('User already exists!');
        form.reset();
      }
    }
  }

  constructor(private employeeService: EmployeeService, private systemService: SystemService, private route: Router) {
  }


}
