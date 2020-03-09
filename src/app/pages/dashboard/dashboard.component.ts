import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';
import { AppointmentModel } from '../../models/appointment.model';

import { EmployeeService } from '../../services/employee.service';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: EmployeeModel;
  appointments: AppointmentModel[];
  appointmentsTitle = 'New Patient Appointment';


  constructor(public employee: EmployeeService, private appointmentService: AppointmentService) {}
  ngOnInit(): void {
    this.currentUser = this.employee.getLoggedEmployee();
    this.appointments = this.appointmentService.getAllDoctorAppointments(this.currentUser.guid);


  }

}
