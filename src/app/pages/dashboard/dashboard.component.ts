import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';
import { AppointmentModel } from '../../models/appointment.model';
import { AppointmentType } from '../../models/system.models';
import { doctor } from '../../data/dummy';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: EmployeeModel;
  appointments: AppointmentModel[] = [];

  constructor() {}

  ngOnInit(): void {
    this.currentUser = doctor;

    const appointment = new AppointmentModel();
    appointment.appType = AppointmentType.check;
    appointment.confirmed = false;
    appointment.date = new Date();
    appointment.email  = '';
    appointment.provider = this.currentUser;

    this.appointments.push(appointment);
  }

}
