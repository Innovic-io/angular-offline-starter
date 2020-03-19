import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { SystemService } from '../../services/system.service';
import { RegisterModel } from '../../models/register.model';
import { AppointmentModel } from '../../models/appointment.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerEmployee = new RegisterModel();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.employeeService.register(this.registerEmployee);
      this.systemService.createAlertMessage('Registration was successful!');
      form.reset();
    }
  }

  constructor(private employeeService: EmployeeService, private systemService: SystemService) { }

  ngOnInit(): void {
  }

}
