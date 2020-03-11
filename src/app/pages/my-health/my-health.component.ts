import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../models/employee.model';
import { AppointmentModel } from '../../models/appointment.model';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-my-health',
  templateUrl: './my-health.component.html',
  styleUrls: ['./my-health.component.css']
})
export class MyHealthComponent implements OnInit {
  currentUser: EmployeeModel;
  appointments: AppointmentModel[] = [];

  constructor(public employeeService: EmployeeService, public appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.currentUser = this.employeeService.getLoggedEmployee();
  }

}
