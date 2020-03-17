import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';
import { AppointmentModel } from '../../models/appointment.model';

import { EmployeeService } from '../../services/employee.service';
import { AppointmentService } from '../../services/appointment.service';
import { doctor } from '../../data/dummy';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: EmployeeModel;
  appointments: AppointmentModel[];
  appointmentsTitle = 'New Patient Appointment';

  constructor(public employeeService: EmployeeService, private appointmentService: AppointmentService) {}

  confirmedButton(event) {
    this.appointmentService.confirmAppointment(doctor.guid, event);
  }

  ngOnInit(): void {
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.appointments = this.appointmentService.getAllUpcomingDoctorAppointments(this.currentUser.guid);
  }

}
