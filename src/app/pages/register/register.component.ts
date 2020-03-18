import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { SystemService } from '../../services/system.service';
import { AppointmentModel } from '../../models/appointment.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employee = new EmployeeModel();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.employeeService.register(this.employee);
      this.systemService.createAlertMessage('Registration was successful!');
    }
  }

  constructor(private employeeService: EmployeeService, private systemService: SystemService) { }

  ngOnInit(): void {
  }

}
